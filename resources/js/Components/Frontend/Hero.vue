<script setup></script>
<template>
    <section
        id="home"
        class="lg:h-[85vh] flex items-center bg-light-primary dark:bg-dark-primary py-32 lg:py-0 overflow-hidden"
    >
        <div
            class="container mx-auto h-full"
            v-motion-fade
        >
            <div class="flex flex-col md:flex-row items-center h-full pt-8">
                <div class="flex-1 flex flex-col items-center lg:items-start">
                    <p class="text-lg text-accent text-md mb-[22px]">
                        Hey, I'm Kiều Hòa Linh! 👋
                    </p>
                    <h1
                        class="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]"
                    >
                        Full Stack <br />
                        Web Developer
                    </h1>
                    <p
                        class="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left"
                    >
                    I want to develop my programming abilities and skills as a programmer in a professional working environment
                    </p>
                    <a href="/download" class="btn btn-md bg-accent hover:bg-light-secondary hover:text-light-tail-500 dark:hover:bg-dark-secondary dark:hover:text-dark-navy-100 md:btn-lg transition-all">Download CV</a> 
                    <div class="pt-12">
                        <h5
                            class="text-lg flex justify-center lg:justify-start items-center text-black dark:text-white mb-2"
                        >
                            Follow me on
                        </h5>
                        <div class="flex items-center mb-6">
                            <a
                                class="w-12 h-12 rounded-full flex items-center justify-center border border-white text-black dark:text-white hover:bg-light-secondary hover:border-light-secondary dark:hover:bg-dark-secondary dark:hover:border-dark-secondary mr-3 sm:mr-4"
                                href="https://www.facebook.com/sirlinh90"
                            >
                                <svg
                                    width="8"
                                    height="16"
                                    viewBox="0 0 8 16"
                                    class="fill-current"
                                >
                                    <path
                                        d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z"
                                    />
                                </svg>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-1 justify-end items-center h-full mt-8 md:mt-0"
                >
                    <img
                        class="rounded-lg" style="width: 491px; height: 571px;"
                        src="../../../../public/img/hero2.jpg"
                        alt="Hero"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
