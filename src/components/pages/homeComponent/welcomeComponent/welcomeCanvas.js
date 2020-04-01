import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';



const WelcomeCanvas = () => {
    let ref = useRef();

    useEffect(() => {
        let canvas = ref.current;
        let context = canvas.getContext('2d');
        let mouse = {x: undefined, y: undefined};
        let requestId;

        const resize = (event) => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        const mousemove = (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        };
        window.addEventListener('mousemove', mousemove);

        class Circle {
            constructor(x, y, radius) {
                this.x = x;
                this.y = y;
                this.radius = radius;

            }
            draw() {
                context.beginPath();
                context.arc(
                    this.x,
                    this.y,
                    this.radius,
                    0,
                    2 * Math.PI
                );
                context.fillStyle = "rgba(255, 255, 255, 0.5)";
                context.fill();
            }
        }

        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            let circle = new Circle(mouse.x, mouse.y, 50);
            circle.draw();
            requestId = requestAnimationFrame(render);
        }
        render();

        return () => {
            cancelAnimationFrame(requestId);
        };
    });


    return (
        <canvas
            ref={ref}
            className="welcome-canvas"
        />
    );
};

export default WelcomeCanvas;
