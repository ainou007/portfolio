export const useGoto = () => {
  const goToEl = (hash: string) => {
    const el = document.getElementById(hash);
    console.log(el);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 81 });
    }
  };

  return goToEl;
};
