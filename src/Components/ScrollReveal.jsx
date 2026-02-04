import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

const ScrollReveal = ({ children, threshold = 0.2, delay = 0, className = "" }) => {
    const [ref, inView] = useInView({
        threshold: threshold,
        triggerOnce: true // Only animate once
    });

    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        delay: delay,
        config: { mass: 1, tension: 280, friction: 60 } // Smooth spring config
    });

    return (
        <animated.div ref={ref} style={props} className={className}>
            {children}
        </animated.div>
    );
};

ScrollReveal.propTypes = {
    children: PropTypes.node.isRequired,
    threshold: PropTypes.number,
    delay: PropTypes.number,
    className: PropTypes.string,
};

export default ScrollReveal;
