"use client";
import { Font } from "../comuns/Font";
import { motion, useAnimation } from "framer-motion";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCube } from 'swiper/modules'
import 'swiper/css/effect-cube';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTheme } from "@/app/contexts/LanguageContexts";

export const Video = () => {

  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animationRight = useAnimation();
  const themeCtx = useTheme();

  useEffect(() => {
    if (inView) {
      animationRight.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animationRight.start({
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.2,
        },
      });
    }
  }, [inView, animationRight]);

  return (
    <>
      <div ref={ref} className="w-full ">
        <motion.div animate={animationRight}>
          <h3
            className="
              text-2xl
              py-2 
              md:text-3xl
              md:py-4
              text-center
            "
          >
            {themeCtx?.theme === 'English' &&  <Font>A brief summary</Font> }
            {themeCtx?.theme === 'Portuguese' &&  <Font>Um breve resumo</Font> }
          </h3>
          <Swiper 
            effect={'cube'}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            navigation={{
              prevEl: ".button-prev-slide",
              nextEl: ".button-next-slide"
            }}
            modules={[Navigation, Pagination, A11y, EffectCube]}
            pagination={{ clickable: true }}
            
            className="relative group"
          >
            
            <SwiperSlide
              className="
                  slide
                  flex 
                  flex-col 
                  items-center 
                  text-center
                  justify-center 
                  bg-gray-800 
                  p-2
                "
            >
              <h1 className="text-2xl font-black text-white">
                {themeCtx?.theme === 'English' && 'Accounting'}
                {themeCtx?.theme === 'Portuguese' && 'Contabilidade'}
              </h1>
              <svg
                width="200px"
                height="200px"
                viewBox="0 0 24 24"
                fill="none"
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_443_3628)">
                  <rect
                    x="2"
                    y="6"
                    width="20"
                    height="12"
                    stroke="white"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 10C21.4747 10 20.9546 9.89654 20.4693 9.69552C19.984 9.4945 19.543 9.19986 19.1716 8.82843C18.8001 8.45699 18.5055 8.01604 18.3045 7.53073C18.1035 7.04543 18 6.52529 18 6L22 6L22 10Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 18C18 16.9391 18.4214 15.9217 19.1716 15.1716C19.9217 14.4214 20.9391 14 22 14L22 18L18 18Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 14C3.06087 14 4.07828 14.4214 4.82843 15.1716C5.57857 15.9217 6 16.9391 6 18L2 18L2 14Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6C6 7.06087 5.57857 8.07828 4.82843 8.82843C4.07828 9.57857 3.06087 10 2 10L2 6H6Z"
                    stroke="white"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.0741 9.5H11.3333C10.597 9.5 10 10.0596 10 10.75C10 11.4404 10.597 12 11.3333 12H13.1111C13.8475 12 14.4444 12.5596 14.4444 13.25C14.4444 13.9404 13.8475 14.5 13.1111 14.5H10"
                    stroke="white"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 9.51733V8.5"
                    stroke="white"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 15.5173V14.5"
                    stroke="white"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_443_3628">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h1 className="pb-7">
              {themeCtx?.theme === 'English'  && 'Accountant with considerable work experience in the sector'}
              {themeCtx?.theme === 'Portuguese'  && 'Contador com considerável experiência de trabalho no setor'}
                
              </h1>
            </SwiperSlide>
            <SwiperSlide
              className="
                  slide
                  flex 
                  flex-col 
                  items-center 
                  text-center
                  justify-center 
                  bg-gray-800 
                  p-2
                "
            >
              <h1 className="text-2xl font-black text-white">
                {themeCtx?.theme === 'English' && 'Data Science'}
                {themeCtx?.theme === 'Portuguese' && 'Ciência de Dados'}
                
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="200px" 
                height="200px"
                fill='white'
                className="inline" 
              >
                <path d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"></path>
              </svg>

              <h1 className="pb-7 ">
                {themeCtx?.theme === 'English' && 'I have been a Data Science intern at Bayer since 02/15/2024'}
                {themeCtx?.theme === 'Portuguese' && 'Sou estagiário de Ciência de Dados na Bayer desde 15/02/2024'}
              </h1>
            </SwiperSlide>
            
            <SwiperSlide
              className="
                  slide
                  flex 
                  flex-col 
                  items-center 
                  text-center
                  justify-center 
                  bg-gray-800 
                  p-2
                "
            >
              <h1 className="text-2xl font-black text-white">
                {themeCtx?.theme === 'English' &&  'Kaggle Challenger'}
                {themeCtx?.theme === 'Portuguese' &&  'Competidor Kaggle'}
                
              </h1>
              <svg 
                fill="white" 
                width="200px" 
                height="200px" 
                viewBox="0 0 24 24" 
                role="img"
                className="inline" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.102 7.348c-.068 0-.102.034-.102.102v6.752c0 .068.034.102.102.102h.705c.068 0 .103-.034.103-.103v-1.48l.418-.4 1.502 1.91a.184.184 0 0 0 .143.072h.909c.048 0 .075-.013.082-.04.013-.041.006-.075-.02-.102l-1.982-2.462 1.9-1.839c.02-.02.023-.05.01-.092-.014-.034-.041-.05-.082-.05h-.94c-.047 0-.095.023-.143.07L.91 11.608V7.45c0-.068-.035-.102-.103-.102zm18.042 0c-.068 0-.102.034-.102.102v6.752c0 .068.034.101.102.101h.705c.068 0 .102-.034.102-.102V7.45c0-.068-.034-.102-.102-.102zM5.961 9.625c-.565 0-1.11.181-1.634.542-.055.054-.065.102-.031.143l.368.52c.027.048.071.055.133.021.394-.272.783-.409 1.164-.409.293 0 .516.09.669.266a.84.84 0 0 1 .2.644c-.661.068-1.155.15-1.482.245-.83.238-1.246.691-1.246 1.358 0 .422.153.77.46 1.042.313.266.684.398 1.113.398.47 0 .855-.112 1.154-.337v.143c0 .069.038.102.113.102h.704c.068 0 .102-.033.102-.102v-2.829c0-.66-.224-1.14-.674-1.44-.306-.205-.677-.307-1.113-.307zm4.322 0c-.674 0-1.194.263-1.562.787-.313.436-.47.967-.47 1.594 0 .66.163 1.208.49 1.644.375.497.892.745 1.553.745.531 0 .957-.132 1.277-.398v.531c0 .858-.413 1.287-1.236 1.287-.361 0-.732-.19-1.114-.572a.098.098 0 0 0-.071-.03.11.11 0 0 0-.082.03l-.48.48c-.04.062-.038.113.01.154.136.115.256.212.358.29.102.079.19.142.265.19.354.197.729.296 1.124.296.68 0 1.207-.193 1.578-.577.371-.385.557-.949.557-1.69V9.82c0-.068-.034-.102-.102-.102h-.705c-.069 0-.102.034-.102.102v.204c-.348-.266-.777-.399-1.287-.399zm4.803 0c-.675 0-1.195.263-1.563.787-.313.436-.47.967-.47 1.594 0 .66.163 1.208.49 1.644.375.497.892.745 1.553.745.531 0 .957-.132 1.277-.398v.531c0 .858-.412 1.287-1.236 1.287-.361 0-.732-.19-1.114-.572a.098.098 0 0 0-.071-.03.11.11 0 0 0-.082.03l-.48.48c-.04.062-.037.113.01.154.136.115.256.212.358.29.102.079.19.142.266.19.354.197.728.296 1.123.296.681 0 1.207-.193 1.578-.577.371-.385.557-.949.557-1.69V9.82c0-.068-.034-.102-.102-.102h-.705c-.068 0-.102.034-.102.102v.204c-.348-.266-.777-.399-1.287-.399zm6.745 0c-.653 0-1.185.211-1.593.634-.443.463-.664 1.028-.664 1.695 0 .709.225 1.29.674 1.747.463.463 1.042.694 1.737.694.646 0 1.215-.183 1.705-.551.055-.041.055-.088 0-.143l-.48-.49c-.04-.041-.092-.041-.153 0-.3.21-.637.316-1.011.316-.423 0-.773-.119-1.052-.357a1.318 1.318 0 0 1-.43-.838h3.32c.068 0 .102-.034.102-.102l.01-.224c.035-.688-.166-1.26-.602-1.717a2.075 2.075 0 0 0-1.563-.664zm-.02.787a1.2 1.2 0 0 1 .837.317c.246.21.371.473.378.786h-2.461c.06-.327.207-.593.439-.797.231-.204.5-.306.807-.306zm-11.425.102c.62 0 1.014.218 1.185.654v1.685c-.17.436-.576.654-1.216.654-.313 0-.569-.099-.766-.296-.266-.252-.398-.654-.398-1.206 0-.994.398-1.491 1.195-1.491zm4.802 0c.62 0 1.015.218 1.185.654v1.685c-.17.436-.576.654-1.216.654-.313 0-.568-.099-.766-.296-.265-.252-.398-.654-.398-1.206 0-.994.398-1.491 1.195-1.491zm-8.359 1.655v1.021c-.286.286-.667.412-1.144.378a.88.88 0 0 1-.45-.158.516.516 0 0 1-.224-.363c-.034-.266.116-.47.45-.613.245-.109.7-.197 1.368-.265z"/>
              </svg>

              <h1 className="pb-7">
              {themeCtx?.theme === 'English' && 'I participate in problem-solving competitions on Kaggle'}
              {themeCtx?.theme === 'Portuguese' && 'Participo de competições sobre resolução de problemas no Kaggle'}
                
              </h1>
            </SwiperSlide>
            <div className="absolute z-10 top-[45%] button-prev-slide w-[40px] h-[40px] group-hover:left-0 -left-[23rem] duration-500  grid place-items-center">
              <HiOutlineArrowNarrowLeft />
            </div>
            <div className="absolute z-10 top-[45%] button-next-slide w-[40px] h-[40px] group-hover:right-0 -right-[23rem] duration-500  grid place-items-center">
              <HiOutlineArrowNarrowRight />
            </div>
          </Swiper>
        </motion.div>
      </div>
    </>
  );
};
