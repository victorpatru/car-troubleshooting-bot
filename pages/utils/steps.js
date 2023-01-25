export const steps = [
  // Intro
  {
    id: "car-silent",
    message:
      "Hello, there! Before we start could you tell me whether the car is silent when you turn the key?",
    trigger: "car-silent-choice",
  },
  {
    id: "car-silent-choice",
    options: [
      { value: "y", label: "Yes", trigger: "car-silent-yes" },
      { value: "n", label: "No", trigger: "car-silent-no" },
    ],
  },
  // Car Silent Yes Branch
  {
    id: "car-silent-yes",
    message: "Are the battery terminals corroded?",
    trigger: "battery-corroded",
  },
  {
    id: "battery-corroded",
    options: [
      { value: "y", label: "Yes", trigger: "clean-terminals" },
      { value: "n", label: "No", trigger: "replace-cables" },
    ],
  },
  {
    id: "clean-terminals",
    message: "Clean terminals and try starting again",
    end: true,
  },
  {
    id: "replace-cables",
    message: "Replace cables and try again",
    end: true,
  },
  // Car Silent No Branch
  {
    id: "car-silent-no",
    message: "Does the car make a clicking noise?",
    trigger: "clicking-noise",
  },
  {
    id: "clicking-noise",
    options: [
      { value: "y", label: "Yes", trigger: "replace-battery" },
      { value: "n", label: "No", trigger: "crank-up" },
    ],
  },

  {
    id: "replace-battery",
    message: "Replace the battery.",
    end: true,
  },
  {
    id: "crank-up",
    message: "Does the car crank up but fail to start?",
    trigger: "crank-up-choice",
  },
  {
    id: "crank-up-choice",
    options: [
      { value: "y", label: "Yes", trigger: "check-spark-plug" },
      { value: "n", label: "No", trigger: "engine-start-stop" },
    ],
  },
  {
    id: "check-spark-plug",
    message: "Check spark plug connections",
    end: true,
  },
  {
    id: "engine-start-stop",
    message: "Does the engine start and then die?",
    trigger: "start-stop-choice",
  },
  {
    id: "start-stop-choice",
    options: [
      { value: "y", label: "Yes", trigger: "fuel-injection" },
      { value: "n", label: "No", trigger: "try-again" },
    ],
  },
  {
    id: "fuel-injection",
    message: "Does your car have fuel injection?",
    trigger: "fuel-injection-choice",
  },
  {
    id: "try-again",
    message:
      "We're not able to help you at the moment. Feel free to call our technicians at #000 0000 0000",
    end: true,
  },
  {
    id: "fuel-injection-choice",
    options: [
      { value: "y", label: "Yes", trigger: "service" },
      { value: "n", label: "No", trigger: "choke-open-close" },
    ],
  },
  {
    id: "service",
    message: "Get it in for service",
    end: true,
  },
  {
    id: "choke-open-close",
    message: "Check to ensure that the choke is opening and closing",
    end: true,
  },
];
