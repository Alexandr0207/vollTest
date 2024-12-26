import React from 'react';

import userIcon from '../../../assets/user.svg'
import lockIcon from '../../../assets/lock.svg'
import userAccountIcon from '../../../assets/userAccount.svg'
import mailIcon from '../../../assets/mail.svg'
import headPhoneIcon from '../../../assets/headphone.svg'

import locale from '../../../assets/language.svg'
import {Input, InputHolder} from "../../../components";

import styles from './style.module.scss'

const CreatingAccountPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftPart}/>
            <div className={styles.rightPart}>
                <img className={styles.locale} src={locale} alt={'language'}/>

                <div className={styles.title}>
                    Create an account<span>.</span>
                </div>

                <div className={styles.description}>
                    Already have an account? <span> Sign in</span>
                </div>

                <InputHolder
                    labelTitle={'User ID'}
                >
                    <Input>
                        <img src={userIcon} className={styles.inputAddon} alt={'user'}/>
                    </Input>
                </InputHolder>

                <InputHolder
                    labelTitle={'Password'}
                    error={'8 characters minimun'}
                >
                    <Input>
                        <img src={lockIcon} className={styles.inputAddon} alt={'lock'}/>
                    </Input>
                </InputHolder>

                <InputHolder
                    labelTitle={'Account Name'}
                    error={'Visible nickname for your profile'}
                >
                    <Input>
                        <img src={userAccountIcon} className={styles.inputAddon} alt={'user'}/>
                    </Input>
                </InputHolder>

                <InputHolder
                    labelTitle={'Email'}
                >
                    <Input>
                        <div className={styles.resend}>
                            Resend (60s)
                        </div>
                        <img src={mailIcon} className={styles.inputAddon} alt={'mail'}/>
                    </Input>
                </InputHolder>

                <InputHolder
                    className={styles.emailContainer}
                    labelTitle={'Verification Code'}
                >
                    <Input>
                        <img src={mailIcon} className={styles.inputAddon} alt={'mail'}/>
                    </Input>
                </InputHolder>

                <div className={styles.approves}>
                    <input type='checkbox' className={styles.checkbox}/>
                    <div className={styles.descriptionApproves}>
                        [Required] I read the <span className={styles.link}>Terms of Service</span> and I agree to the
                        terms.
                    </div>
                </div>

                <div className={styles.approves}>
                    <input type='checkbox' className={styles.checkbox}/>
                    <div className={styles.descriptionApproves}>
                        [Required] I read the <span className={styles.link}>Privacy Policy</span> and I agree to the
                        terms.
                    </div>
                </div>

                <div className={styles.approves}>
                    <input type='checkbox' className={styles.checkbox}/>
                    <div className={styles.descriptionApproves}>
                        [Optional] I would like to receive promotional emails.
                    </div>
                </div>

                <div className={styles.submitBtn}>
                    Create Account
                </div>

                <div className={styles.footerPart}>
                    <div className={styles.linkPart}>
                        <img src={headPhoneIcon} alt={'head phone'}/>
                        Have Promo Code?
                    </div>
                    <div className={styles.linkPart}>
                        Contact Support
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CreatingAccountPage;