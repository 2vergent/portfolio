import React from 'react'
import './CodeShowcase.css'
import CodeLogo from '../../Assets/CodeLogo.png'
import GitLogoColor from '../../Assets/GithubLogoColor.png'
import CodeLang from '../../Assets/CodeLang.png'
// import DummyCode from '../../Assets/DummyCode.jpg'
import Pyjournal from '../../Assets/pyjournal.jpg'
import PyjournalLink from '../../Assets/pyjournalLink.jpg'
import Stock from '../../Assets/stock.jpg'
import StocklLink from '../../Assets/stockLink.jpg'
import Bank from '../../Assets/bank.jpg'
import BanklLink from '../../Assets/bankLink.jpg'

const CodeShowcase = () => {
    return (
        <div className="code_main">
            <div className="codesmain_container">
                <div className="code_showcase insta_showcase flex flex-col md:flex-row">
                    <div className="codelogo flex w-60 pl-10 md:w-[14%] md:pl-0">
                    <img src={CodeLogo} alt="CodeLogo" />
                    </div>
                    <div className="code_details">
                        <div className="code_id">
                            <img src={GitLogoColor} alt="Underpixel" />
                            <h1>2vergent</h1>
                        </div>
                        
                        <div className="code_tools">
                            <img src={CodeLang} alt="Tools" />
                            <h1>Languages :</h1>
                        </div>

                        <h2>C++, Python &#38; JavaScript</h2>
                    </div>
                </div>
                <div className="code_posts insta_posts flex flex-col pl-2 space-y-5 md:flex-row md:space-y-0 md:pl-0">
                    <a href="https://github.com/2vergent/pyjournal" className="pic1">
                        <img src={Pyjournal} alt="Pic1" className="show1edit" />
                        <img src={PyjournalLink} alt="Pic1" className="show1orig" />
                    </a>

                    <a href="https://github.com/2vergent/stock-analysis" className="pic2">
                        <img src={Stock} alt="Pic2" className="show2edit" />
                        <img src={StocklLink} alt="Pic2" className="show2orig" />
                    </a>

                    <a href="https://github.com/2vergent/MiniBank" className="pic3">
                        <img src={Bank} alt="Pic3" className="show3edit" />
                        <img src={BanklLink} alt="Pic3" className="show3orig" />
                    </a>

                    {/* <a href="Coming Soon" className="pic4">
                        <img src={DummyCode} alt="Pic4" className="show4edit" />
                        <img src={DummyCode} alt="Pic4" className="show4orig" />
                    </a> */}

                </div>
            </div> 
        </div>
    )
}

export default CodeShowcase