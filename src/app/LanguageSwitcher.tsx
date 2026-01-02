"use client";

export default function LanguageSwitcher() {
  const setLocale = (locale: string) => {
    document.cookie = `locale=${locale}; max-age=${60 * 60 * 24 * 30}; path=/`;
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <div>
      <div onClick={() => setLocale("fr")}>Fr</div>
      <div onClick={() => setLocale("en")}>En</div>
    </div>
  );
}
