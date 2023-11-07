export default function useTextToSpeech() {
  const startSpeech = (text) => {
    const synth = window.speechSynthesis;

    if (!synth) {
      console.error("Speech synthesis is not supported in this browser.");
      return;
    }

    const voices = synth.getVoices();
    const utterThis = new SpeechSynthesisUtterance();
    utterThis.text = text;

    // Log available voices for debugging
    console.log("Available voices:", voices);

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === "Google UK English Male")
        utterThis.voice = voices[i];
    }

    synth.speak(utterThis);
  };

  const pauseSpeech = () => {
    const synth = window.speechSynthesis;
    if (synth) {
      synth.pause();
    } else {
      console.error("Speech synthesis is not supported in this browser.");
    }
  };

  const resumeSpeech = () => {
    const synth = window.speechSynthesis;
    if (synth) {
      synth.resume();
    } else {
      console.error("Speech synthesis is not supported in this browser.");
    }
  };

  return {
    startSpeech,
    pauseSpeech,
    resumeSpeech,
  };
}