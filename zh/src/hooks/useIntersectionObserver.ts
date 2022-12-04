import { MutableRefObject, useEffect, useState } from "react";

type Entry = {
  threshold?: number;
  root?: HTMLElement;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
  isIntersecting: boolean;
};

const useIntersectionObserver = (
  elementRef: MutableRefObject<HTMLElement | null>,
  { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false }
) => {
  const [entry, setEntry] = useState<Entry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry: IntersectionObserverCallback = ([entry]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
};
export default useIntersectionObserver;
