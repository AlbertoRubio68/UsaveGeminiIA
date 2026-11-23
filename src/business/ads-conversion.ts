const adsId = 'AW-18588781777';
const destination = adsId + '/aVrOCM3q_LwdENGZ6Z9F';

type AdsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

// Called only after explicit opt-in and a confirmed form submission.
export function recordAdsConversion(): void {
  const browser = window as AdsWindow;
  if (!browser.gtag) {
    const layer = browser.dataLayer ??= [];
    browser.gtag = function () { layer.push(arguments); };
    browser.gtag('consent', 'default', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    });
    browser.gtag('js', new Date());
    browser.gtag('config', adsId, { send_page_view: false, allow_ad_personalization_signals: false });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + adsId;
    document.head.append(script);
  }
  browser.gtag('event', 'conversion', { send_to: destination });
}
