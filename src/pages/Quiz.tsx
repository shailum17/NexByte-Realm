
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartBar, Users, CircleCheck, CircleX } from "lucide-react";

const QUIZZES = {
  Beginner: [
    {
      type: "Multiple Choice",
      questions: [
        {
          q: "What does 'phishing' mean in cybersecurity?",
          options: [
            "Catching viruses from emails",
            "Tricking users into giving up sensitive info",
            "Looking for bugs in code",
            "Upgrading software automatically"
          ],
          answer: 1
        }
      ]
    },
    {
      type: "True/False",
      questions: [
        {
          q: "Using 'password123' is a secure practice.",
          options: ["True", "False"],
          answer: 1
        }
      ]
    },
  ],
  Intermediate: [
    {
      type: "Scenario-Based",
      questions: [
        {
          q: "You receive an email from your 'bank' asking you to click a link and log in. What should you do?",
          options: [
            "Click the link and enter your details",
            "Ignore it",
            "Report it as phishing",
            "Reply to ask if it's real"
          ],
          answer: 2
        }
      ]
    }
  ],
  Advanced: [
    {
      type: "Technical",
      questions: [
        {
          q: "Which tool is best for packet capturing and network analysis?",
          options: [
            "Photoshop",
            "Wireshark",
            "PowerPoint",
            "FileZilla"
          ],
          answer: 1
        }
      ]
    }
  ]
};

const INITIAL_STATS = {
  Beginner: 20,
  Intermediate: 8,
  Advanced: 5
};

const INITIAL_CORRECT = {
  Beginner: 14,
  Intermediate: 5,
  Advanced: 4
};

const INITIAL_WRONG = {
  Beginner: 6,
  Intermediate: 3,
  Advanced: 1
};

export default function Quiz() {
  const [level, setLevel] = useState("Beginner");
  const [selected, setSelected] = useState<{ [key: number]: number }>({});
  const [submitted, setSubmitted] = useState(false);
  const [stats, setStats] = useState(INITIAL_STATS);
  const [correct, setCorrect] = useState(INITIAL_CORRECT);
  const [wrong, setWrong] = useState(INITIAL_WRONG);

  const quizzes = QUIZZES[level];
  // For real-time stat simulation
  function submitQuiz() {
    let right = 0;
    let wrongAnswers = 0;
    quizzes.forEach((quiz, idx) => {
      quiz.questions.forEach((q, qIdx) => {
        const key = idx * 100 + qIdx;
        if (selected[key] === q.answer) right++;
        else wrongAnswers++;
      });
    });
    setStats((old) => ({ ...old, [level]: old[level] + 1 }));
    setCorrect((old) => ({ ...old, [level]: old[level] + right }));
    setWrong((old) => ({ ...old, [level]: old[level] + wrongAnswers }));
    setSubmitted(true);
  }

  function resetQuiz() {
    setSelected({});
    setSubmitted(false);
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-primary">Cyber Security Quiz</h1>
      <p className="mb-6 text-muted-foreground">Test your knowledge at various levels and see how you compare to other users!</p>
      <Tabs value={level} onValueChange={setLevel}>
        <TabsList className="mb-4">
          {Object.keys(QUIZZES).map(lvl => (
            <TabsTrigger key={lvl} value={lvl}>{lvl}</TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(QUIZZES).map(([lvl, quizzes]) => (
          <TabsContent key={lvl} value={lvl}>
            {quizzes.map((quiz, idx) => (
              <Card key={idx} className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>{quiz.type} Quiz</span>
                  </CardTitle>
                  <CardDescription>
                    Answer the following {quiz.type.toLowerCase()} question:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {quiz.questions.map((q, qIdx) => {
                    const key = idx * 100 + qIdx;
                    const answered = submitted && selected[key] !== undefined;
                    return (
                      <div key={qIdx} className="mb-4">
                        <div className="font-medium mb-2">{q.q}</div>
                        <div className="flex flex-col gap-2">
                          {q.options.map((opt, i) => (
                            <Button
                              key={i}
                              variant={
                                submitted
                                  ? i === q.answer
                                    ? "secondary"
                                    : selected[key] === i
                                    ? "destructive"
                                    : "outline"
                                  : selected[key] === i
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              className="justify-start"
                              disabled={submitted}
                              onClick={() =>
                                setSelected(sel => ({
                                  ...sel,
                                  [key]: i
                                }))
                              }
                            >
                              {opt}
                              {submitted && answered && selected[key] === i && (
                                <>
                                  {i === q.answer ? (
                                    <CircleCheck className="ml-2 text-green-600" size={16} />
                                  ) : (
                                    <CircleX className="ml-2 text-red-600" size={16} />
                                  )}
                                </>
                              )}
                            </Button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            ))}
            {!submitted ? (
              <Button onClick={submitQuiz} disabled={Object.keys(selected).length === 0}>
                Submit Answers
              </Button>
            ) : (
              <div className="flex gap-4 items-center mt-4">
                <Button variant="secondary" onClick={resetQuiz}>Try Again</Button>
              </div>
            )}
            {/* Real-time statistics */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-2">
                <ChartBar className="text-primary" /> Real-Time Analysis
              </h2>
              <div className="flex flex-wrap gap-6 bg-muted rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <Users className="text-sky-600" />
                  <span>Total Played:</span>
                  <span className="text-base font-semibold">{stats[lvl]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheck className="text-green-600" />
                  <span>Correct Answers:</span>
                  <span className="text-base font-semibold">{correct[lvl]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleX className="text-red-600" />
                  <span>Wrong Answers:</span>
                  <span className="text-base font-semibold">{wrong[lvl]}</span>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
