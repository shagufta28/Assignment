import React, { useState } from 'react';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const questions = [
    {
      question: 'Can education flashcards be used for all age groups?',
      answer: 'Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.'
    },
    {
      question: 'How do education flashcards work?',
      answer: 'Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.'
    },
    {
      question: 'Can education flashcards be used for test preparation?',
      answer: 'Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.'
    }
  ];

  const handleQuestionClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container ml-10 mb-10 mt-10 max-w-3xl text-left"> 
      <h1 className="text-3xl font-bold text-blue-900 mb-5">Frequently Asked Questions</h1>
      <div className="flex flex-col gap-6">
        {questions.map((item, index) => (
          <div key={index} className="rounded-lg shadow-md border border-blue-900 p-4">
            <div
              className="cursor-pointer mb-2"
              onClick={() => handleQuestionClick(index)}
            >
              <h2 className="text-lg font-semibold">{item.question}</h2>
            </div>
            {expandedIndex === index && (
              <p className="text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
