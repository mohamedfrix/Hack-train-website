import React from "react";
import secaiLogo from "../../assets/Home/secai_white_without_text.svg";
import eventLogo from "../../assets/Home/event_logo_white.svg";
export default function Footer() {
  return (
    <div className=" bg-gradient-to-t from-mainLighter to-transparent pt-6"
    id="contact"
    >
      <h1 className="text-center text-xl sm:text-2x md:text-3xl">Contact Us</h1>
      <h4 className="text-center text-md sm:text-lg md:text-xl pt-9">
        Follow us for new updates and colabs{" "}
      </h4>
      <div>
        <div className="flex justify-center gap-2 sm:gap-8 md:gap-12 pt-5">
          <a
            className=" bg-dark py-2 px-4 rounded-2xl "
            href="https://www.linkedin.com/company/sec-ai/"
          >
            <svg
              width="35"
              height="35"
              className="h-5 w-5 sm:h-8 sm:w-8 "
              viewBox="0 0 50 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.2222 0.5H2.77778C2.04107 0.5 1.33453 0.792658 0.813592 1.31359C0.292658 1.83453 0 2.54107 0 3.27778V47.7222C0 48.4589 0.292658 49.1655 0.813592 49.6864C1.33453 50.2073 2.04107 50.5 2.77778 50.5H47.2222C47.9589 50.5 48.6655 50.2073 49.1864 49.6864C49.7073 49.1655 50 48.4589 50 47.7222V3.27778C50 2.54107 49.7073 1.83453 49.1864 1.31359C48.6655 0.792658 47.9589 0.5 47.2222 0.5ZM14.8306 43.1028H7.40833V19.2417H14.8306V43.1028ZM11.1194 15.9833C9.97901 15.9833 8.88529 15.5303 8.07889 14.7239C7.27248 13.9175 6.81944 12.8238 6.81944 11.6833C6.81944 10.5429 7.27248 9.44918 8.07889 8.64277C8.88529 7.83637 9.97901 7.38333 11.1194 7.38333C12.2599 7.38333 13.3536 7.83637 14.16 8.64277C14.9664 9.44918 15.4194 10.5429 15.4194 11.6833C15.4194 12.8238 14.9664 13.9175 14.16 14.7239C13.3536 15.5303 12.2599 15.9833 11.1194 15.9833ZM42.6056 43.1028H35.1917V31.5C35.1917 28.7333 35.1417 25.175 31.3361 25.175C27.475 25.175 26.8889 28.1917 26.8889 31.3056V43.1056H19.4806V19.2444H26.5917V22.5056H26.6944C27.6806 20.6306 30.1028 18.6528 33.7056 18.6528C41.2167 18.6528 42.6028 23.5917 42.6028 30.0194L42.6056 43.1028Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            className=" bg-dark py-2 px-4 rounded-2xl "
            href="https://twitter.com/SecAi1"
          >
            <svg
              width="35"
              height="35"
              className="h-5 w-5 sm:h-8 sm:w-8 md:w-12 md:h-8"
              viewBox="0 0 50 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7152 0.5C7.87404 0.5 5.14922 1.62835 3.13985 3.63695C1.13049 5.64554 0.00109106 8.36993 0 11.2111V39.7848C0 42.6267 1.12892 45.3521 3.1384 47.3616C5.14788 49.3711 7.87333 50.5 10.7152 50.5H39.2889C42.1301 50.4989 44.8545 49.3695 46.8631 47.3601C48.8717 45.3508 50 42.626 50 39.7848V11.2111C49.9989 8.37064 48.8701 5.64687 46.8616 3.6384C44.8531 1.62992 42.1294 0.501091 39.2889 0.5H10.7152ZM42.371 11.2275C42.371 12.046 42.0458 12.831 41.4671 13.4098C40.8883 13.9885 40.1033 14.3137 39.2848 14.3137C38.4663 14.3137 37.6814 13.9885 37.1026 13.4098C36.5238 12.831 36.1987 12.046 36.1987 11.2275C36.1987 10.409 36.5238 9.62403 37.1026 9.04526C37.6814 8.4665 38.4663 8.14135 39.2848 8.14135C40.1033 8.14135 40.8883 8.4665 41.4671 9.04526C42.0458 9.62403 42.371 10.409 42.371 11.2275ZM25.0062 16.939C22.7362 16.939 20.5592 17.8407 18.9541 19.4458C17.349 21.051 16.4472 23.228 16.4472 25.4979C16.4472 27.7679 17.349 29.9449 18.9541 31.55C20.5592 33.1552 22.7362 34.0569 25.0062 34.0569C27.2761 34.0569 29.4532 33.1552 31.0583 31.55C32.6634 29.9449 33.5651 27.7679 33.5651 25.4979C33.5651 23.228 32.6634 21.051 31.0583 19.4458C29.4532 17.8407 27.2761 16.939 25.0062 16.939ZM12.3282 25.4979C12.3282 22.1366 13.6635 18.913 16.0403 16.5362C18.4171 14.1594 21.6407 12.8241 25.0021 12.8241C28.3634 12.8241 31.587 14.1594 33.9638 16.5362C36.3406 18.913 37.6759 22.1366 37.6759 25.4979C37.6759 28.8593 36.3406 32.0829 33.9638 34.4597C31.587 36.8365 28.3634 38.1718 25.0021 38.1718C21.6407 38.1718 18.4171 36.8365 16.0403 34.4597C13.6635 32.0829 12.3282 28.8593 12.3282 25.4979Z"
                fill="#F8F8F8"
              />
            </svg>
          </a>
          <a
            className=" bg-dark py-2 px-4 rounded-2xl "
            href="https://www.instagram.com/sec_ai/"
          >
            <svg
              width="35"
              height="35"
              className="h-5 w-5 sm:h-8 sm:w-8 md:w-12 md:h-8"
              viewBox="0 0 50 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.725 28.7826C28.1 29.2476 28.55 29.7737 28.55 29.7737C31.3125 29.688 32.375 27.9139 32.375 27.9139C32.375 23.9741 30.575 20.7806 30.575 20.7806C28.775 19.4592 27.0625 19.4959 27.0625 19.4959L26.8875 19.6917C29.0125 20.3279 30 21.2456 30 21.2456C28.7 20.5482 27.425 20.2056 26.2375 20.071C25.3375 19.9731 24.475 19.9976 23.7125 20.0954C23.647 20.0954 23.5911 20.1048 23.528 20.1153L23.5 20.1199C23.0625 20.1566 22 20.3157 20.6625 20.8907C20.2 21.0987 19.925 21.2456 19.925 21.2456C19.925 21.2456 20.9625 20.279 23.2125 19.6427L23.0875 19.4959C23.0875 19.4959 21.375 19.4592 19.575 20.7806C19.575 20.7806 17.775 23.9741 17.775 27.9139C17.775 27.9139 18.825 29.688 21.5875 29.7737C21.5875 29.7737 22.05 29.2231 22.425 28.7581C20.8375 28.2932 20.2375 27.3144 20.2375 27.3144C20.2375 27.3144 20.3625 27.4 20.5875 27.5224C20.6 27.5346 20.6125 27.5468 20.6375 27.5591C20.6563 27.5713 20.675 27.5805 20.6938 27.5897C20.7125 27.5988 20.7313 27.608 20.75 27.6202C21.0625 27.7915 21.375 27.9261 21.6625 28.0362C22.175 28.232 22.7875 28.4278 23.5 28.5624C24.4375 28.7337 25.5375 28.7948 26.7375 28.5746C27.325 28.4767 27.925 28.3054 28.55 28.0485C28.9875 27.8894 29.475 27.6569 29.9875 27.3266C29.9875 27.3266 29.3625 28.3299 27.725 28.7826ZM21.4625 25.4179C21.4625 24.6715 22.025 24.0597 22.7375 24.0597C23.45 24.0597 24.025 24.6715 24.0125 25.4179C24.0125 26.1642 23.45 26.776 22.7375 26.776C22.0375 26.776 21.4625 26.1642 21.4625 25.4179ZM26.025 25.4179C26.025 24.6715 26.5875 24.0597 27.3 24.0597C28.0125 24.0597 28.575 24.6715 28.575 25.4179C28.575 26.1642 28.0125 26.776 27.3 26.776C26.6 26.776 26.025 26.1642 26.025 25.4179Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25 0.0292969C38.8071 0.0292969 50 10.9853 50 24.5002C50 38.0151 38.8071 48.9711 25 48.9711C11.1929 48.9711 0 38.0151 0 24.5002C0 10.9853 11.1929 0.0292969 25 0.0292969ZM14.0625 16.3147C14.0625 14.9198 15.2125 13.7942 16.625 13.7942H33.375C34.7875 13.7942 35.9375 14.9198 35.9375 16.3147V38.2651L33.25 35.9403L31.7375 34.57L30.1375 33.114L30.8 35.3775H16.625C15.2125 35.3775 14.0625 34.2519 14.0625 32.857V16.3147Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            className=" bg-dark py-2 px-4 rounded-2xl "
            href="https://www.instagram.com/sec_ai/"
          >
            <svg
              width="35"
              height="35"
              className="h-5 w-5 sm:h-8 sm:w-8 md:w-12 md:h-8"
              viewBox="0 0 50 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9507 1.15651C20.6329 0.281165 29.3671 0.281165 38.0493 1.15651L41.7953 1.53495C43.6087 1.71754 45.3146 2.58423 46.6374 3.99499C47.9601 5.40575 48.8224 7.27817 49.0849 9.30975C50.305 18.7208 50.305 28.282 49.0849 37.693C48.8219 39.7241 47.9594 41.5959 46.6367 43.0061C45.314 44.4163 43.6084 45.2826 41.7953 45.465L38.0493 45.8435C29.3671 46.7188 20.6329 46.7188 11.9507 45.8435L8.2047 45.465C6.39162 45.2826 4.68601 44.4163 3.36333 43.0061C2.04065 41.5959 1.17812 39.7241 0.915062 37.693C-0.305021 28.282 -0.305021 18.7208 0.915062 9.30975C1.17762 7.27817 2.03991 5.40575 3.36264 3.99499C4.68536 2.58423 6.39126 1.71754 8.2047 1.53495L11.9507 1.15651ZM9.83833 9.14279C9.55641 8.97134 9.23986 8.88534 8.91963 8.89318C8.5994 8.90103 8.28646 9.00245 8.01141 9.18754C7.73636 9.37262 7.50861 9.63503 7.35044 9.94911C7.19227 10.2632 7.10909 10.6182 7.10904 10.9794V37.4148C7.10904 37.9683 7.30403 38.4991 7.65112 38.8905C7.99821 39.2819 8.46897 39.5018 8.95983 39.5018C9.45069 39.5018 9.92144 39.2819 10.2685 38.8905C10.6156 38.4991 10.8106 37.9683 10.8106 37.4148V14.4744L24.1215 22.5553C24.6693 22.8892 25.3307 22.8892 25.8785 22.5553L39.1894 14.4744V37.4148C39.1894 37.9683 39.3844 38.4991 39.7315 38.8905C40.0786 39.2819 40.5493 39.5018 41.0402 39.5018C41.531 39.5018 42.0018 39.2819 42.3489 38.8905C42.696 38.4991 42.891 37.9683 42.891 37.4148V10.9794C42.8909 10.6182 42.8077 10.2632 42.6496 9.94911C42.4914 9.63503 42.2636 9.37262 41.9886 9.18754C41.7135 9.00245 41.4006 8.90103 41.0804 8.89318C40.7601 8.88534 40.4436 8.97134 40.1617 9.14279L25 18.3479L9.83833 9.14279Z"
                fill="#F8F8F8"
              />
            </svg>
          </a>
          
        </div>
      </div>
      <div className="flex justify-between py-8 items-center px-5 ">
        <img src={eventLogo} alt="" className="h-16 sm:h-24 mr-2"/>
        <h3 className="text-[12px] sm:text-base w-full text-center">copyright &copy; 2024. All rights reserved</h3>
        <img src={secaiLogo} alt="" className="h-16 sm:h-24"/>
      </div>
    </div>
  );
}
