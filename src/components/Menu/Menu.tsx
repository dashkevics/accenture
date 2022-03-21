import React, {CSSProperties, FC, useState} from "react";
import FacebookLogo from "../../assets/images/facebook-logo.svg";
import InstagramLogo from "../../assets/images/instagram-logo.svg";
import LinkedInLogo from "../../assets/images/linkedin-logo.svg";
import TelegramLogo from "../../assets/images/telegram-logo.svg";
import VKLogo from "../../assets/images/vk-logo.svg";
import YouTubeLogo from "../../assets/images/youtube-logo.svg";
import "./Menu.sass";
import {Modal} from 'react-responsive-modal';

interface IMenu {
    userName: string;
    userImage?: string;
    style?: CSSProperties;
    isRulesShow?: boolean;
    onRatingClick?: () => void;
}

export const Menu: FC<IMenu> = (
    {
        userName,
        userImage,
        style,
        isRulesShow,
        onRatingClick
    }
) => {
    const [isMenuActive, setMenuActive] = useState<boolean>(false);

    const onBurgerClick = () => {
        setMenuActive(!isMenuActive)
    }

    const BurgerMenu = () => {

        const IconsArray = [
            {logo: FacebookLogo, url: "https://www.facebook.com/"},
            {logo: InstagramLogo, url: "https://www.instagram.com/"},
            {logo: TelegramLogo, url: "https://www.telegram.com/"},
            {logo: VKLogo, url: "https://www.vk.com/"},
            {logo: YouTubeLogo, url: "https://www.youtube.com/"},
            {logo: LinkedInLogo, url: "https://www.linkedin.com/"}
        ];

        return (
            <div className={"burger-menu"}>
                <div className={"burger-menu-title"}>Контакты</div>
                <div className={"burger-menu-links"}>
                    {IconsArray.map(item => (
                        <img className={"burger-menu-links-icon"}
                             src={item.logo}
                             onClick={() => window.open(item.url)}
                             key={item.logo}
                             alt={"burger-menu"}
                        />))}
                </div>
                <div className={"burger-menu-text"}
                     onClick={() => window.open('mailto:support@codenrock.com?subject=SendMail&body=Body%20goes%20here')}>support@codenrock.com
                </div>
                <div className={"burger-menu-text"}
                     onClick={() => window.open('https://codenrock.com')}>Codenrock.com
                </div>
            </div>
        )
    }

    return (
        <div className={"menu"} style={style}>
            <div className={"menu-user"}>
                <div className={"menu-user-name"}>{userName}</div>
                <div className={"menu-user-image-wrapper"}>
                    {userImage && <img src={userImage}
                                       className={"menu-user-image-wrapper-photo"}
                                       alt={"user avatar"}/>}
                </div>
                {!isRulesShow ? <div className={"menu-user-burger"}
                                     onClick={onBurgerClick}/> :
                    <div className={"menu-user-rating"}
                         onClick={onRatingClick}/>}
                <Modal
                    classNames={{
                        overlay: 'burgerOverlay',
                        modal: 'burgerModal',
                    }}
                    open={isMenuActive}
                    onClose={() => setMenuActive(!isMenuActive)}
                    showCloseIcon={false}
                >
                    <BurgerMenu/>
                </Modal>
            </div>
        </div>
    )
}