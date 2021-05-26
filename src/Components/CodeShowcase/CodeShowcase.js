import React from 'react'
import './CodeShowcase.css'
import CodeLogo from '../../Assets/CodeLogo.png'
import GitLogoColor from '../../Assets/GithubLogoColor.png'
import CodeLang from '../../Assets/CodeLang.png'
import DummyCode from '../../Assets/DummyCode.jpg'

const CodeShowcase = () => {
    return (
        <div className="code_main">
            <div className="codesmain_container">
                <div className="code_showcase">
                    <img src={CodeLogo} alt="CodeLogo" />
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
                <div className="code_posts">
                    <a href="Coming Soon" className="pic1">
                        <img src={DummyCode} alt="Pic1" className="show1edit" />
                        <img src={DummyCode} alt="Pic1" className="show1orig" />
                    </a>

                    <a href="Coming Soon" className="pic2">
                        <img src={DummyCode} alt="Pic2" className="show2edit" />
                        <img src={DummyCode} alt="Pic2" className="show2orig" />
                    </a>

                    <a href="Coming Soon" className="pic3">
                        <img src={DummyCode} alt="Pic3" className="show3edit" />
                        <img src={DummyCode} alt="Pic3" className="show3orig" />
                    </a>

                    <a href="Coming Soon" className="pic4">
                        <img src={DummyCode} alt="Pic4" className="show4edit" />
                        <img src={DummyCode} alt="Pic4" className="show4orig" />
                    </a>

                </div>
            </div> 
        </div>
    )
}

export default CodeShowcase