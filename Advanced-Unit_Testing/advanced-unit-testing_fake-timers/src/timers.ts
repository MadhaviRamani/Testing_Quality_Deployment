export function getGreeting(): string {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good morning";
  }

  if (hour < 18) {
    return "Good afternoon";
  }

  return "Good evening";
}

export function debounce(callback: () => void, delay: number): () => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
}

export function startCountdown(
  seconds: number,
  onTick: (remaining: number) => void,
  onDone: () => void,
): () => void {
  let remaining = seconds;

  const intervalId = setInterval(() => {
    remaining -= 1;
    onTick(remaining);

    if (remaining === 0) {
      clearInterval(intervalId);
      onDone();
    }
  }, 1000);

  return () => clearInterval(intervalId);
}
