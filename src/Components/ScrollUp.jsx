import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollUp = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = window.scrollY;
            if (scrolled > 200) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisible);
        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <a
            href="#"
            className={`scrollup ${visible ? "show-scroll" : ""}`}
            onClick={(e) => {
                e.preventDefault();
                scrollToTop();
            }}
            aria-label="Scroll to top"
        >
            <FiArrowUp className="scrollup__icon" />
        </a>
    );
};

export default ScrollUp;
