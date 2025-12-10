let slideIndex = 0;
                    const slides = document.getElementsByClassName("mySlides");

                    function carousel() {
                    // Remove active class from all slides
                    for (let i = 0; i < slides.length; i++) {
                    slides[i].classList.remove("active");
                    }

                    // Show current slide
                    slideIndex++;
                    if (slideIndex > slides.length) { slideIndex = 1; }
                    slides[slideIndex - 1].classList.add("active");

                    setTimeout(carousel, 5000); // 5 seconds per slide
                    }

                    carousel();
