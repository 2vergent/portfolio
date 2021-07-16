import React, { useEffect } from 'react'
import './CodeShowcase.css'
import Aos from "aos"
import "aos/dist/aos.css"
import CodeLogo from '../../Assets/CodeLogo.png'
import GitLogoColor from '../../Assets/GithubLogoColor.png'
import CodeLang from '../../Assets/CodeLang.png'
import Pyjournal from '../../Assets/pyjournal.jpg'
import PyjournalLink from '../../Assets/pyjournalLink.jpg'
import Stock from '../../Assets/stock.jpg'
import StocklLink from '../../Assets/stockLink.jpg'
import Bank from '../../Assets/bank.jpg'
import BanklLink from '../../Assets/bankLink.jpg'
import Lettre from '../../Assets/lettre.jpg'
import LettreLink from '../../Assets/lettreLink.jpg'

const CodeShowcase = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="code_main">
            <div className="codesmain_container">
                <div className="code_showcase flex flex-col md:flex-row">
                    <div className="codelogo flex pl-10 md:pl-5">
                        <img src={CodeLogo} alt="CodeLogo" />
                    </div>

                    <div data-aos-anchor-placement="top-bottom" data-aos="fade-right" className="code_details">
                        <div className="code_id">
                            <img src={GitLogoColor} alt="Github" />
                            <h1>2vergent</h1>
                        </div>
                        
                        <div className="code_tools">
                            <img src={CodeLang} alt="Tools" />
                            <h1>Languages :</h1>
                        </div>

                        <h2>C++, Python &#38; JavaScript</h2>
                    </div>

                </div>
                
                <div className="code_posts grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pl-2 pt-[2rem] md:pl-0 place-items-center">
                    <a data-aos="fade-left" href="https://github.com/2vergent/pyjournal" className="pic1">
                        <img src={Pyjournal} alt="Pic1" className="show1edit" />
                        <img src={PyjournalLink} alt="Pic1" className="show1edit" />
                    </a>

                    <a data-aos="fade-left" href="https://github.com/2vergent/stock-analysis" className="pic2">
                        <img src={Stock} alt="Pic2" className="show1edit" />
                        <img src={StocklLink} alt="Pic2" className="show1edit" />
                    </a>

                    <a data-aos="fade-left" href="https://github.com/2vergent/MiniBank" className="pic3">
                        <img src={Bank} alt="Pic3" className="show1edit" />
                        <img src={BanklLink} alt="Pic3" className="show1edit" />
                    </a>

                    <a data-aos="fade-left" href="https://github.com/2vergent/lettre_project" className="pic4">
                        <img src={Lettre} alt="Pic4" className="show1edit" />
                        <img src={LettreLink} alt="Pic4" className="show1edit" />
                    </a>

                </div>

            </div> 
            
        </div>
    )
}

export default CodeShowcase