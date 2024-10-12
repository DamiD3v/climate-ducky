import React from "react";
import { Link } from 'react-router-dom'
import { animateScroll } from 'react-scroll';
import HenryTalentIcon from '../../assets/HenryTalentIcon.jpg'
import HenryCertificate from '../../assets/Henry certificate.jpg'
import DuckyFooterLogoIcon from '../../assets/duckIconLakeDark.svg'
import './Footer.css'

const Footer = ({ mobile }) => {
    const scrollOptions = {
        duration: 2000,
        delay: 0.2,
        smooth: true
    }
    const logoHandler = () => {
        animateScroll.scrollToTop(scrollOptions)
    }

    return (
        <>
            {mobile ? (
                <div className="mobile-footer-container" >

                    {/* Content divider */}
                    <hr className="mobile-footer-division-line" />

                    {/* Main title */}
                    <div className="mobile-footer-iconTitle-container">
                        <p className="mobile-footer-title">Climate Ducky 2024</p>
                    </div>

                    {/* Developer credits */}
                    <p className="mobile-footer-credits">Made by <a href="https://damidevportafolio.vercel.app/" target="_blank" style={{textDecoration:'none'}}><span className="portfolio-link-text">Damián Medina</span></a> alias <span style={{ fontWeight: 'bold' }}>"DamiDev"</span></p>

                    {/* Social Media and Henry certificate buttons */}
                    <div className="share">
                        {/* <!-- Github --> */}
                        <a href="https://github.com/Marcos1D9">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                className="github-icon" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                                </path>
                            </svg>
                        </a>

                        {/* <!-- Henry Certificate --> */}
                        <button
                            className="henry-button"
                            onClick={() => window.open(HenryCertificate, "_blank")}
                        >
                            <img className="henryIcon" src={HenryTalentIcon} alt="Henry talent icon" />
                        </button>

                        {/* <!-- LinkedIn --> */}
                        <a href="https://www.linkedin.com/in/medina-marcos-developer/">
                            <svg className="linkedIn-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <path fill="currentColor"
                                        d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
                                </g>
                            </svg>
                        </a>

                    </div>
                    {/* Footer Ducky Logo */}
                    <Link
                        to='/'
                        onClick={logoHandler}
                    >
                        <img className="ducky-footer-logo-icon" src={DuckyFooterLogoIcon} alt="Ducky logo icon" />
                    </Link>
                </div>
            ) : (

                <div className="footer-container" >
                    {/* Footer logo & title container */}
                    <div className="footer-iconTitle-container">
                        {/* Footer Desktop Ducky Logo */}
                        <Link
                            to='/'
                            onClick={logoHandler}
                        >
                            <svg className="footer-icon" viewBox="0 0 502 502" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M251 436.348C276.382 433.147 299.935 423.798 323.487 413.809C347.329 403.699 368.114 389.235 390.94 377.003C422.636 360.017 467.566 358.421 485.262 327.116C501.877 297.722 479.023 260.985 475.503 227.404C471.983 193.814 480.782 157.329 464.372 127.81C447.949 98.2685 418.509 73.4953 385.617 65.7154C352.345 57.8454 320.17 82.2919 286.145 85.6535C262.327 88.0068 238.624 77.6592 215.195 82.553C191.738 87.4531 170.254 99.1137 151.329 113.815C132.676 128.304 124.823 152.966 106.068 167.324C75.0825 191.045 8.60198 186.306 5.79605 225.228C2.93004 264.984 77.3922 266.201 96.415 301.228C110.824 327.759 81.0367 364.432 95.724 390.811C109.727 415.961 142.264 425.083 169.887 433.184C196.138 440.882 223.858 439.772 251 436.348Z" fill="#009DFF" />
                                <path d="M158.967 200.833C158.967 200.833 178.053 173.445 176.68 162.889C175.308 152.299 171.615 150.012 161.026 146.319C150.437 142.625 144.227 136.873 144.227 136.873C144.227 136.873 136.547 100.825 137.331 96.3801C138.246 91.0855 157.333 55.4291 202.663 55.4291C246.359 55.4291 264.302 92.0987 262.014 120.303C259.955 145.828 250.51 152.986 243.843 174.131C237.175 195.309 233.94 207.957 233.94 207.957L194.59 215.997L161.679 208.873L158.967 200.833Z" fill="url(#paint0_linear_58_166)" />
                                <path d="M215.867 357.25C215.867 357.25 218.318 382.219 215.801 385.259C213.252 388.298 175.144 397.123 170.83 400.358C166.157 403.855 168.15 411.699 178.086 420.752C188.021 429.805 196.355 431.374 202.075 429.02C208.807 426.275 220.475 417.353 225.704 413.366C229.887 410.163 236.162 403.365 237.012 397.907C237.894 392.449 235.182 360.388 235.182 360.388L215.867 357.25Z" fill="#FF5D10" />
                                <path d="M265.544 366.009C265.544 366.009 269.139 395.162 267.374 398.691C262.766 407.908 236.424 428.628 234.692 435.492C233.319 441.015 247.111 452.061 260.903 452.356C279.336 452.781 290.872 445.492 292.18 441.472C294.01 435.786 287.114 402.352 286.199 400.522C285.284 398.691 286.656 351.302 286.656 351.302L265.544 366.009Z" fill="#FF5D10" />
                                <path d="M364.277 219.919C364.277 219.919 379.964 216.847 380.03 206.193C380.062 195.538 374.343 200.179 374.278 192.433C374.212 184.688 388.135 182.857 397.286 189.361C404.509 194.492 421.013 211.193 420.098 245.869C418.856 292.964 394.214 327.411 355.42 348.72C323.783 366.074 277.113 364.015 277.113 364.015L364.277 219.919Z" fill="#5E6367" />
                                <path d="M321.823 223.841C329.503 222.926 363.198 212.271 375.193 215.344C389.671 219.037 404.117 229.234 401.175 261.589C397.384 303.586 367.545 329.176 354.701 336.203C331.725 348.753 309.632 349.047 309.632 349.047C309.632 349.047 314.175 224.756 321.823 223.841Z" fill="#B0B0B1" />
                                <path d="M65.1031 123.768C65.1031 127.69 89.4841 139.194 112.492 141.939C135.501 144.684 149.75 141.024 149.75 141.024C149.75 141.024 145.828 131.121 145.828 123.768C145.828 116.414 149.62 97.9488 143.769 93.6347C138.475 89.7128 134.095 97.7854 130.893 100.073C127.657 102.361 118.473 108.799 104.191 109.29C89.909 109.78 77.4897 107.459 72.4567 110.205C67.4236 112.95 65.1031 119.617 65.1031 123.768Z" fill="#FFBF18" />
                                <path d="M205.898 109.714C204.526 115.434 200.637 119.911 193.022 118.702C185.897 117.558 182.433 110.205 184.524 103.047C186.158 97.3932 190.374 93.5694 197.499 94.7786C205.67 96.1513 207.206 104.191 205.898 109.714Z" fill="#2D2B33" />
                                <path d="M208.252 125.402C216.324 122.853 222.305 122.82 221.455 117.329C220.475 111.022 209.984 112.819 203.317 116.349C196.224 120.107 187.008 126.513 191.093 131.71C195.44 137.233 203.611 126.873 208.252 125.402Z" fill="#73DF86" />
                                <path d="M150.208 210.474C150.208 210.474 157.267 241.293 192.531 236.097C217.729 232.371 236.391 219.854 236.391 219.854L236.685 199.297C236.685 199.297 219.952 209.101 199.885 208.807C179.034 208.513 160.928 197.76 160.928 197.76L150.208 210.474Z" fill="white" />
                                <path d="M126.905 267.701C124.454 334.536 174.85 366.303 254.824 367.676C343.458 369.212 377.742 317.214 383.036 284.565C388.56 250.412 366.467 243.156 366.467 243.156C366.467 243.156 388.56 233.94 378.657 212.108C374.049 211.193 351.367 217.239 308.259 212.794C265.446 208.382 236.097 215.867 236.097 215.867C236.097 215.867 225.377 227.534 194.688 225.998C157.921 224.168 150.829 209.755 150.829 209.755C150.829 209.755 128.441 226.129 126.905 267.701Z" fill="#84574E" />
                                <path d="M211.879 280.872C219.331 306.691 245.934 322.28 285.48 320.45C321.365 318.783 347.445 293.748 351.727 271.688C356.4 247.699 346.661 238.548 346.661 238.548C346.661 238.548 367.382 231.031 367.382 216.455C355.714 209.395 318.62 204.493 277.505 202.957C250.837 201.977 235.803 211.847 235.803 211.847C235.803 211.847 198.055 233.025 211.879 280.872Z" fill="#B79277" />
                                <defs>
                                    <linearGradient id="paint0_linear_58_166" x1="197.038" y1="79.431" x2="208.578" y2="189.237" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.171" stop-color="#01AB46" />
                                        <stop offset="0.345" stop-color="#089E42" />
                                        <stop offset="0.671" stop-color="#1A7A37" />
                                        <stop offset="1" stop-color="#2F502A" />
                                    </linearGradient>
                                </defs>
                            </svg >
                        </Link >

                        {/* Logo title */}
                        <p className="footer-title">Climate Ducky 2024</p>
                    </div >

                    {/* Social Media and Henry certificate buttons */}
                    <div className="desktop-share">
                        {/* <!-- Github --> */}
                        <a className="github-icon-container" href="https://github.com/Marcos1D9" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                className="github-icon" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                                </path>
                            </svg>
                        </a>

                        {/* <!-- Henry Certificate --> */}
                        <button
                            className="henry-button"
                            onClick={() => window.open(HenryCertificate, "_blank")}
                        >
                            <img className="henryIcon" src={HenryTalentIcon} alt="Henry talent icon" />
                        </button>

                        {/* <!-- LinkedIn --> */}
                        <a className="linkedin-icon-container" href="https://www.linkedin.com/in/medina-marcos-developer/" target="_blank">
                            <svg className="linkedIn-icon" viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(3.3600000000000003,3.3600000000000003), scale(0.58)">
                                    <rect x="-1.6" y="-1.6" width="19.20" height="19.20" rx="0" fill="#ffffff" strokewidth="0" />
                                </g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
                                </g>
                            </svg>
                        </a>

                    </div>

                    {/* Footer desktop credits */}
                    <p className="footer-credits">Made by <a href="https://damidevportafolio.vercel.app/" target="_blank" style={{textDecoration:'none'}}><span className="portfolio-link-text">Damián Medina</span></a> alias <span style={{ fontWeight: 'bold' }}>"DamiDev"</span></p>
                </div >
            )}

        </>
    )
}

export default Footer;