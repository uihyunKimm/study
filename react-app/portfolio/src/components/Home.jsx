import React, {useState} from "react";
import styles from "./Home.module.scss"




const Home = () => {
    return (
        <div className={styles.title}>
            <div class={styles.flowText}>
                <div class={styles.flowWrap}>KIM UI HYUN. KIM UI HYUN. KIM UI HYUN.</div>
                <div class={styles.flowWrap}>KIM UI HYUN. KIM UI HYUN. KIM UI HYUN. </div>
                <div class={styles.flowWrap}>KIM UI HYUN. KIM UI HYUN. KIM UI HYUN. </div>
                <div class={styles.flowWrap}>KIM UI HYUN. KIM UI HYUN. KIM UI HYUN. </div>
                <div className={styles.title_inner}>
                    <strong className={styles.title_inner_text}>군더더기 없는 인터페이스를 좋아하는</strong>
                    <svg className={styles.title_inner_logo} xmlns="http://www.w3.org/2000/svg" width="1312.332" height="214.12" viewBox="0 0 1312.332 214.12">
                        <g id="그룹_10837" data-name="그룹 10837" transform="translate(-1523.055 668.41)">
                            <path id="패스_35821" data-name="패스 35821" d="M99.375,3.71c47.965,0,75.79-26.765,75.79-91.955V-196.1h-37.63V-84.8c0,41.075-14.84,54.59-38.16,54.59s-37.1-13.515-37.1-54.59V-196.1H23.055V-88.245C23.055-23.055,51.675,3.71,99.375,3.71ZM209.085-196.1V0H248.3V-196.1Z" transform="translate(1500 -458)" fill="#fff"/>
                            <path id="패스_35822" data-name="패스 35822" d="M24.115-196.1V0h39.22V-84.8h74.2V0H176.49V-196.1H137.535v77.115h-74.2V-196.1ZM244.6-71.815V0h39.22V-71.815L342.91-196.1H302.1l-19.61,47.7c-5.565,14.84-11.395,28.355-17.49,43.46h-1.06c-6.1-15.1-11.4-28.62-16.96-43.46l-19.61-47.7h-41.6ZM427.445,3.71c47.965,0,75.79-26.765,75.79-91.955V-196.1h-37.63V-84.8c0,41.075-14.84,54.59-38.16,54.59s-37.1-13.515-37.1-54.59V-196.1h-39.22V-88.245C351.125-23.055,379.745,3.71,427.445,3.71ZM537.155-196.1V0h37.1V-78.705c0-22.525-2.915-47.17-4.77-68.37h1.325l19.875,42.135L647.4,0h39.75V-196.1h-37.1v78.175c0,22.26,2.915,48.23,5.035,68.635h-1.325l-19.61-42.4L577.17-196.1Z" transform="translate(1759 -458)" fill="#fff" opacity="0.5"/>
                            <path id="패스_35823" data-name="패스 35823" d="M27.825-210.41V0h9.54V-210.41Zm46.9,35.51h9.54v-10.6H74.73ZM84-139.655h-9.54V0H84Zm46.11-70.755h-9.54V0h9.54V-38.425l32.86-38.955L211.205,0H221.54l-53-84.535,45.05-55.12H202.46L130.645-51.41h-.53ZM288.32,3.445c20.4,0,32.6-6.89,43.2-13.25l-4.24-8.215C316.675-10.335,304.75-5.3,288.85-5.3c-32.86,0-54.325-27.03-54.325-63.865h102.29c.8-3.445.53-6.625.53-9.54,0-41.605-19.61-64.4-52.735-64.4-31.005,0-60.155,28.355-60.155,73.67C224.455-23.85,253.075,3.445,288.32,3.445ZM328.07-77.91H234.525c2.915-35.245,25.44-56.445,50.085-56.445C311.11-134.355,328.07-116.335,328.07-77.91Z" transform="translate(2498 -458)" fill="#fff" opacity="0.7"/>
                        </g>
                    </svg>
                    <p className={styles.title_inner_info}>
                        <span>탄탄한 코드 위에 감각적인 인터페이스를 그리는 김의현입니다.</span>
                        <span>직관적인 UI와 기억에 남는 UX를 개발하려고 노력합니다.</span>
                        <span>도메인 지식을 바탕으로 개발의 범위를 늘려나가고 있습니다.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;