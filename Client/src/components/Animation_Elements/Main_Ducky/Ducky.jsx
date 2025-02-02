/* Dependencies */
import React from 'react'
import { motion } from 'framer-motion';
/* Dependencies */

/* Components */
/* Components */

/* Assets */
/* Assets */

/* Styles */
import './Ducky.css'
/* Styles */

export const Ducky = ({ mobile }) => {
    return (
        <>
            {mobile ? (
                <motion.div
                    className='mobile-ducky-container'
                >
                    <div className='mobile-ducky'>
                        <svg className='mobile-ducky-body' viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.85313 12.6309C7.85313 12.6309 9.45001 10.2517 9.33516 9.33474C9.22032 8.41489 8.91133 8.21616 8.0254 7.89535C7.13946 7.57454 6.61993 7.07487 6.61993 7.07487C6.61993 7.07487 5.97735 3.94342 6.04297 3.55731C6.11954 3.09738 7.71641 0 11.509 0C15.1649 0 16.666 3.18539 16.4746 5.63548C16.3024 7.85276 15.5121 8.47451 14.9543 10.3114C14.3965 12.1511 14.1258 13.2498 14.1258 13.2498L10.8336 13.9482L8.08008 13.3293L7.85313 12.6309Z" fill="url(#paint0_linear_162_29)" />
                            <path d="M21.4785 14.6295C22.1211 14.55 24.9403 13.6245 25.9438 13.8914C27.1551 14.2122 28.3637 15.098 28.1176 17.9086C27.8004 21.5568 25.3039 23.7797 24.2293 24.3901C22.3071 25.4803 20.4586 25.5058 20.4586 25.5058C20.4586 25.5058 20.8387 14.709 21.4785 14.6295Z" fill="#B0B0B1" />
                            <path d="M0 5.9364C0 6.27708 2.03984 7.27642 3.96484 7.5149C5.88984 7.75338 7.08203 7.43541 7.08203 7.43541C7.08203 7.43541 6.75391 6.57518 6.75391 5.9364C6.75391 5.29762 7.07109 3.69356 6.58164 3.31881C6.13867 2.97813 5.77227 3.67937 5.5043 3.8781C5.23359 4.07683 4.46523 4.63612 3.27031 4.67871C2.07539 4.72129 1.03633 4.51972 0.615234 4.7582C0.194141 4.99668 0 5.57584 0 5.9364Z" fill="#FFBF18" />
                            <path d="M11.9766 6.07838C12.652 5.85694 13.1523 5.8541 13.0813 5.37714C12.9992 4.82921 12.1215 4.98535 11.5637 5.29197C10.9703 5.61846 10.1992 6.17491 10.541 6.62631C10.9047 7.10611 11.5883 6.20614 11.9766 6.07838Z" fill="#73DF86" />
                            <path d="M7.1203 13.4684C7.1203 13.4684 7.71093 16.1456 10.6613 15.6942C12.7695 15.3705 14.3308 14.2832 14.3308 14.2832L14.3555 12.4974C14.3555 12.4974 12.9555 13.3492 11.2766 13.3236C9.53202 13.2981 8.01717 12.364 8.01717 12.364L7.1203 13.4684Z" fill="white" />
                            <path d="M5.17073 18.4395C4.96565 24.2454 9.18206 27.0049 15.8731 27.1241C23.2887 27.2576 26.1571 22.7407 26.6 19.9045C27.0621 16.9377 25.2137 16.3074 25.2137 16.3074C25.2137 16.3074 27.0621 15.5068 26.2336 13.6104C25.8481 13.5309 23.9504 14.0561 20.3438 13.67C16.7617 13.2867 14.3063 13.9368 14.3063 13.9368C14.3063 13.9368 13.4094 14.9504 10.8418 14.8169C7.76565 14.658 7.17229 13.4059 7.17229 13.4059C7.17229 13.4059 5.29925 14.8283 5.17073 18.4395Z" fill="#84574E" />
                            <defs>
                                <linearGradient id="paint0_linear_162_29" x1="11.0384" y1="2.08499" x2="12.0783" y2="11.6154" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.171" stop-color="#01AB46" />
                                    <stop offset="0.345" stop-color="#089E42" />
                                    <stop offset="0.671" stop-color="#1A7A37" />
                                    <stop offset="1" stop-color="#2F502A" />
                                </linearGradient>
                            </defs>
                        </svg>


                        <div className='mobile-ducky-tail-container'>
                            <motion.svg
                                className='mobile-ducky-tail'
                                viewBox="0 0 13 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                animate={{
                                    y: [null, 2, -1, 0],
                                    rotate: [null, 7, -7, 0]
                                }}
                                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3, delay: 2 }}
                            >
                                <g clip-path="url(#clip0_162_19)">
                                    <path d="M7.93513 3.52375C7.93513 3.52375 9.26305 3.34908 9.33307 2.42619C9.40036 1.50311 8.89489 1.87189 8.93637 1.2003C8.97785 0.528709 10.1509 0.451365 10.8753 1.06836C11.447 1.55516 12.7233 3.0987 12.4368 6.09823C12.0478 10.1721 9.78236 13.0133 6.41544 14.6334C3.66985 15.9526 -0.212844 15.5018 -0.212844 15.5018L7.93513 3.52375Z" fill="#5E6367" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_162_19">
                                        <rect width="13" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </motion.svg >
                        </div>

                        <div className='mobile-ducky-tip-tail-container'>
                            <motion.svg
                                className='mobile-ducky-tip-tail'
                                viewBox="0 0 5 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                animate={{
                                    y: [null, 2, -1, 0],
                                    rotate: [null, -7, 7, 0]
                                }}
                                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3, delay: 2 }}
                            >
                                <g clip-path="url(#clip0_162_17)">
                                    <path d="M0.653311 4.4316C0.653311 4.4316 0.709464 4.41172 0.796928 4.37175C1.1242 4.22217 1.88987 3.79122 1.7925 3.06738C1.6664 2.15049 1.24865 2.6163 1.14959 1.95076C1.05054 1.28522 2.18192 0.965665 3.01872 1.41858C3.67917 1.77587 5.24849 3.02032 5.59189 6.01387C6.05836 10.0796 4.43316 13.3297 1.47666 15.6145C-0.934648 17.4757 -4.82623 17.842 -4.82623 17.842L0.653311 4.4316Z" fill="#3B3B3B" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_162_17">
                                        <rect width="5" height="4" fill="white" />
                                    </clipPath>
                                </defs>
                            </motion.svg>
                        </div>

                        <div className='mobile-ducky-eye-container'>
                            <svg className='mobile-ducky-eye' viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <mask id="mobile-eye-mask">
                                        <rect x="0" y="0" width="3" height="3" fill="white" />
                                        <motion.rect
                                            x="0"
                                            y="0"
                                            width="3"
                                            height="3"
                                            fill="black"
                                            animate={{ y: ["100%", "0%", "100%"] }}
                                            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop', repeatDelay: 3, delay: 3 }}
                                        />
                                    </mask>
                                </defs>
                                <motion.path
                                    d="M2 1.99998C1.88516 2.49681 1.55976 2.88576 0.922655 2.78072C0.326561 2.68135 0.0367179 2.04257 0.211718 1.42082C0.348437 0.929668 0.701171 0.597502 1.29727 0.702546C1.98086 0.821786 2.10937 1.52019 2 1.99998Z"
                                    fill="#2D2B33"
                                    mask="url(#mobile-eye-mask)"
                                />
                            </svg>
                        </div>

                        <div className='mobile-back-wing-container'>
                            <motion.div
                                className='mobile-back-wing'
                                animate={{
                                    rotate: [null, 8, 0, 8, 0, 8, 0]
                                }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5, delay: 2 }}
                            >
                                <svg className='mobile-back-wing-svg' viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.61167 12.1708C4.29413 13.7544 6.9795 13.669 9.88696 11.6685C12.525 9.85275 13.4092 6.7479 12.7759 4.89307C12.0887 2.87527 10.9562 2.64845 10.9562 2.64845C10.9562 2.64845 12.1952 1.10884 11.5631 0.0165688C10.3758 0.0373467 7.36147 1.41785 4.18954 3.24003C2.13276 4.42317 1.42529 5.87116 1.42529 5.87116C1.42529 5.87116 -0.507382 9.2368 2.61167 12.1708Z" fill="#B79277" />
                                </svg>
                            </motion.div>
                        </div>

                        <div className='mobile-front-wing-container'>
                            <motion.div
                                className='mobile-front-wing'
                                animate={{
                                    rotate: [null, -8, 4, -10, 4, -10, 4, -10]
                                }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5, delay: 2 }}
                            >
                                <svg className='mobile-front-wing-svg' viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.98818 10.8483C3.46613 12.6075 6.03459 12.8581 8.96848 11.2623C11.6306 9.81362 12.723 6.88521 12.2676 4.99124C11.7738 2.93105 10.7117 2.56815 10.7117 2.56815C10.7117 2.56815 12.0171 1.21566 11.5017 0.0680886C10.3674 -0.0593493 7.3813 0.916498 4.20943 2.30495C2.15256 3.20681 1.36159 4.53579 1.36159 4.53579C1.36159 4.53579 -0.751888 7.58892 1.98818 10.8483Z" fill="#84574E" />
                                </svg>
                            </motion.div>
                        </div>
                    </div>
                </motion.div >
            ) : (
                <motion.div
                    className='ducky-container'
                >
                    <div className='ducky'>
                        <svg className='ducky-body' viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_162_28)">
                                <path d="M7.85313 12.6309C7.85313 12.6309 9.45001 10.2517 9.33516 9.33474C9.22032 8.41489 8.91133 8.21616 8.0254 7.89535C7.13946 7.57454 6.61993 7.07487 6.61993 7.07487C6.61993 7.07487 5.97735 3.94342 6.04297 3.55731C6.11954 3.09738 7.71641 0 11.509 0C15.1648 0 16.666 3.18539 16.4746 5.63548C16.3024 7.85276 15.5121 8.47451 14.9543 10.3114C14.3965 12.1511 14.1258 13.2498 14.1258 13.2498L10.8336 13.9482L8.08008 13.3293L7.85313 12.6309Z" fill="url(#paint0_linear_162_28)" />
                                <path d="M21.4785 14.6295C22.1211 14.55 24.9403 13.6245 25.9438 13.8914C27.1551 14.2122 28.3637 15.098 28.1176 17.9086C27.8004 21.5568 25.3039 23.7797 24.2293 24.3901C22.3071 25.4803 20.4586 25.5058 20.4586 25.5058C20.4586 25.5058 20.8387 14.709 21.4785 14.6295Z" fill="#B0B0B1" />
                                <path d="M0 5.9364C0 6.27708 2.03984 7.27642 3.96484 7.5149C5.88984 7.75338 7.08203 7.43541 7.08203 7.43541C7.08203 7.43541 6.75391 6.57518 6.75391 5.9364C6.75391 5.29762 7.07109 3.69356 6.58164 3.31881C6.13867 2.97813 5.77227 3.67937 5.5043 3.8781C5.23359 4.07683 4.46523 4.63612 3.27031 4.67871C2.07539 4.72129 1.03633 4.51972 0.615234 4.7582C0.194141 4.99668 0 5.57584 0 5.9364Z" fill="#FFBF18" />
                                <path d="M11.9766 6.07838C12.652 5.85694 13.1523 5.8541 13.0813 5.37714C12.9992 4.82921 12.1215 4.98535 11.5637 5.29197C10.9703 5.61846 10.1992 6.17491 10.541 6.62631C10.9047 7.10611 11.5883 6.20614 11.9766 6.07838Z" fill="#73DF86" />
                                <path d="M7.1203 13.4684C7.1203 13.4684 7.71093 16.1456 10.6613 15.6942C12.7695 15.3705 14.3308 14.2832 14.3308 14.2832L14.3555 12.4974C14.3555 12.4974 12.9555 13.3492 11.2766 13.3236C9.53202 13.2981 8.01717 12.364 8.01717 12.364L7.1203 13.4684Z" fill="white" />
                                <path d="M5.17073 18.4395C4.96565 24.2454 9.18206 27.0049 15.8731 27.1241C23.2887 27.2576 26.1571 22.7407 26.6 19.9045C27.0621 16.9377 25.2137 16.3074 25.2137 16.3074C25.2137 16.3074 27.0621 15.5068 26.2336 13.6104C25.8481 13.5309 23.9504 14.0561 20.3438 13.67C16.7617 13.2867 14.3063 13.9368 14.3063 13.9368C14.3063 13.9368 13.4094 14.9504 10.8418 14.8169C7.76565 14.658 7.17229 13.4059 7.17229 13.4059C7.17229 13.4059 5.29925 14.8283 5.17073 18.4395Z" fill="#84574E" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_162_28" x1="11.0384" y1="2.08499" x2="12.0783" y2="11.6154" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.171" stop-color="#01AB46" />
                                    <stop offset="0.345" stop-color="#089E42" />
                                    <stop offset="0.671" stop-color="#1A7A37" />
                                    <stop offset="1" stop-color="#2F502A" />
                                </linearGradient>
                                <clipPath id="clip0_162_28">
                                    <rect width="29" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <div className='ducky-tail-container'>
                            <motion.svg
                                className='ducky-tail'
                                viewBox="0 0 13 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                animate={{
                                    y: [null, 2, -1, 0],
                                    rotate: [null, 7, -7, 0]
                                }}
                                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3, delay: 2 }}
                            >
                                <g clip-path="url(#clip0_162_19)">
                                    <path d="M7.93513 3.52375C7.93513 3.52375 9.26305 3.34908 9.33307 2.42619C9.40036 1.50311 8.89489 1.87189 8.93637 1.2003C8.97785 0.528709 10.1509 0.451365 10.8753 1.06836C11.447 1.55516 12.7233 3.0987 12.4368 6.09823C12.0478 10.1721 9.78236 13.0133 6.41544 14.6334C3.66985 15.9526 -0.212844 15.5018 -0.212844 15.5018L7.93513 3.52375Z" fill="#5E6367" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_162_19">
                                        <rect width="13" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </motion.svg >
                        </div>

                        <div className='ducky-tip-tail-container'>
                            <motion.svg
                                className='ducky-tip-tail'
                                viewBox="0 0 5 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                animate={{
                                    y: [null, 2, -1, 0],
                                    rotate: [null, -7, 7, 0]
                                }}
                                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3, delay: 2 }}
                            >
                                <g clip-path="url(#clip0_162_17)">
                                    <path d="M0.653311 4.4316C0.653311 4.4316 0.709464 4.41172 0.796928 4.37175C1.1242 4.22217 1.88987 3.79122 1.7925 3.06738C1.6664 2.15049 1.24865 2.6163 1.14959 1.95076C1.05054 1.28522 2.18192 0.965665 3.01872 1.41858C3.67917 1.77587 5.24849 3.02032 5.59189 6.01387C6.05836 10.0796 4.43316 13.3297 1.47666 15.6145C-0.934648 17.4757 -4.82623 17.842 -4.82623 17.842L0.653311 4.4316Z" fill="#3B3B3B" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_162_17">
                                        <rect width="5" height="4" fill="white" />
                                    </clipPath>
                                </defs>
                            </motion.svg>
                        </div>

                        <div className='ducky-eye-container'>
                            <svg className='ducky-eye' viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <mask id="eye-mask">
                                        <rect x="0" y="0" width="3" height="3" fill="white" />
                                        <motion.rect
                                            x="0"
                                            y="0"
                                            width="3"
                                            height="3"
                                            fill="black"
                                            animate={{ y: ["100%", "0%", "100%"] }}
                                            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop', repeatDelay: 3, delay: 3 }}
                                        />
                                    </mask>
                                </defs>
                                <motion.path
                                    d="M2 1.99998C1.88516 2.49681 1.55976 2.88576 0.922655 2.78072C0.326561 2.68135 0.0367179 2.04257 0.211718 1.42082C0.348437 0.929668 0.701171 0.597502 1.29727 0.702546C1.98086 0.821786 2.10937 1.52019 2 1.99998Z"
                                    fill="#2D2B33"
                                    mask="url(#eye-mask)"
                                />
                            </svg>
                        </div>

                        <div className='back-wing-container'>
                            <motion.div
                                className='back-wing'
                                animate={{
                                    rotate: [null, 8, 0, 8, 0, 8, 0]
                                }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5, delay: 2 }}
                            >
                                <svg className='back-wing-svg' viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.61167 12.1708C4.29413 13.7544 6.9795 13.669 9.88696 11.6685C12.525 9.85275 13.4092 6.7479 12.7759 4.89307C12.0887 2.87527 10.9562 2.64845 10.9562 2.64845C10.9562 2.64845 12.1952 1.10884 11.5631 0.0165688C10.3758 0.0373467 7.36147 1.41785 4.18954 3.24003C2.13276 4.42317 1.42529 5.87116 1.42529 5.87116C1.42529 5.87116 -0.507382 9.2368 2.61167 12.1708Z" fill="#B79277" />
                                </svg>
                            </motion.div>
                        </div>

                        <div className='front-wing-container'>
                            <motion.div
                                className='front-wing'
                                animate={{
                                    rotate: [null, -8, 4, -10, 4, -10, 4, -10]
                                }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5, delay: 2 }}
                            >
                                <svg className='front-wing-svg' viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.98818 10.8483C3.46613 12.6075 6.03459 12.8581 8.96848 11.2623C11.6306 9.81362 12.723 6.88521 12.2676 4.99124C11.7738 2.93105 10.7117 2.56815 10.7117 2.56815C10.7117 2.56815 12.0171 1.21566 11.5017 0.0680886C10.3674 -0.0593493 7.3813 0.916498 4.20943 2.30495C2.15256 3.20681 1.36159 4.53579 1.36159 4.53579C1.36159 4.53579 -0.751888 7.58892 1.98818 10.8483Z" fill="#84574E" />
                                </svg>
                            </motion.div>
                        </div>
                    </div>
                </motion.div >
            )}
        </>
    )
}