export async function shareScore(
  userName: string,
  score: number,
  total: number,
  percentage: number,
  weakSpotTitle?: string
): Promise<{ success: boolean; method: 'web-share' | 'whatsapp' | 'clipboard' }> {
  const weakText = weakSpotTitle ? ` Needs review: ${weakSpotTitle}.` : '';
  const text = `English Study App - ${userName}: ${score}/${total} (${percentage}%).${weakText} Keep going!`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'English Exam Score',
        text: text
      });
      return { success: true, method: 'web-share' };
    } catch (e: any) {
      if (e.name === 'AbortError') {
        return { success: false, method: 'web-share' };
      }
      // Fall through to WhatsApp fallback
    }
  }

  // Fallback to WhatsApp URL
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
  const win = window.open(whatsappUrl, '_blank');
  if (win) {
    return { success: true, method: 'whatsapp' };
  }

  // Fallback to clipboard
  try {
    await navigator.clipboard.writeText(text);
    return { success: true, method: 'clipboard' };
  } catch {
    return { success: false, method: 'clipboard' };
  }
}
