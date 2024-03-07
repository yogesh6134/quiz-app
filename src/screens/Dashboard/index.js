import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, Button, TouchableOpacity, SafeAreaView, ScrollView, Image, Alert, Platform } from 'react-native';
import { quizData } from '../../mock/quizData';
import styles from './styles';
import { IMAGES } from '../../assets';
import { COLORS } from '../../utils/Colors';
import CustomAlert from '../../component/customAlert';

const Circle = ({ isCorrect }) => {
    let color = COLORS.white;
    if (isCorrect === true) {
        color = COLORS.green;
    } else if (isCorrect === false) {
        color = COLORS.red;
    }
    const totalQuestions = quizData.length;
    const circleWidth = 100 / totalQuestions - 2;
    return <View style={[styles.circle, { backgroundColor: color, width: `${circleWidth}%` }]} />;
};


const DashboardScreen = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const backHandler = () => {
        Alert.alert('In Progress')
    }

    const formattedNumber = useMemo(() => {
        if (currentQuestionIndex === 0) {
            return "0";
        } else {
            return ("0" + currentQuestionIndex).slice(-2);
        }
    }, [currentQuestionIndex]);

    const handleAnswer = useCallback((option) => {
        if (isAnswered) return;
        setSelectedOption(option);
        const correctAnswer = quizData[currentQuestionIndex].answer;
        const isCorrect = option === correctAnswer;
        quizData[currentQuestionIndex].isCorrect = isCorrect;
        setIsAnswered(true);
        setCorrectAnswer(isCorrect);
    }, [isAnswered]);

    const goToNextQuestion = useCallback(() => {
        if (!correctAnswer) setIsVisible(true)
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        }
        setCorrectAnswer(false)
    }, [isAnswered, currentQuestionIndex, correctAnswer]);


    const closeModal = useCallback(() => {
        setIsVisible(false);
    }, [isVisible])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={backHandler} style={[styles.backButton, Platform.OS === 'android' && {marginTop: 10}]}>
                    <Image source={IMAGES.back} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.reviewText}>Review Test</Text>
                <Text style={styles.questionHeading}>Question {formattedNumber}/{quizData.length} </Text>
                <View style={styles.circleRow}>
                    {quizData.map((item, index) => (
                        <Circle
                            key={index}
                            isCorrect={item.isCorrect}
                        />
                    ))}
                </View>
                <Text style={styles.quizQuestion}>{quizData[currentQuestionIndex].question}</Text>
                {quizData[currentQuestionIndex].options.map((item, index) => {
                    const isCorrect = item === quizData[currentQuestionIndex].answer;
                    const isSelected = selectedOption === item;
                    const isAnswered = isSelected || (selectedOption !== null && item === quizData[currentQuestionIndex].answer);
                    const isIncorrectSelected = isAnswered && !isCorrect && selectedOption === item;
                    const isCorrectOption = isAnswered && isCorrect;
                    const correctAnswerColor = COLORS.green;
                    const incorrectAnswerColor = COLORS.red;

                    return (
                        <View
                            key={index}
                            style={[
                                styles.option,
                                (isSelected || isCorrectOption) && { borderColor: correctAnswerColor },
                                isIncorrectSelected && { borderColor: incorrectAnswerColor },
                            ]}
                        >
                            <Text style={styles.answerText}>{item}</Text>
                            <TouchableOpacity style={styles.checkIconStyle}
                                onPress={() => handleAnswer(item)}
                                disabled={isAnswered}>
                                {isSelected ? (
                                    isCorrect ?
                                        <Image source={IMAGES.correct} style={styles.checkIcon} />
                                        :
                                        <Image source={IMAGES.close} style={styles.checkIcon} />
                                ) : null}
                                {(isCorrectOption && !isSelected) && <Image source={IMAGES.correct} style={styles.checkIcon} />}
                            </TouchableOpacity>
                        </View>
                    )
                })}

                <TouchableOpacity onPress={() => setIsVisible(true)}>
                    <Image source={IMAGES.info} style={styles.infoIcon} />
                </TouchableOpacity>

                <CustomAlert
                    isVisibleModal={isVisible}
                    answer={quizData[currentQuestionIndex].explanation}
                    onClose={closeModal}
                />

            </ScrollView>
            <View style={styles.bottomView}>
                <TouchableOpacity onPress={goToNextQuestion} disabled={!isAnswered} style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default DashboardScreen