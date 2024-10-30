import "./header.css";
import moon from "../assets/moon.png";
import fade from "../assets/fade.png";
import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg4.png";
import ui from "../assets/moon_ui.png";
import bg4 from "../assets/bg5.png";
import bg5 from "../assets/bg6.png";
import bg6 from "../assets/bg7.png";
import { Outlet, Link, useNavigate } from "react-router-dom";
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from "@react-spring/web";

export default function Header() {
    const [inView, setInView] = useState(false);
    const ref = useRef();
    const navigate = useNavigate();

    const [inView2, setInView2] = useState(false);
    const ref2 = useRef();

    const styles = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(-700px)' : 'translateY(-650px)',
        config: { duration: 500 },
    });

    const styles2 = useSpring({
        opacity: inView2 ? 1 : 0,
        transform: inView2 ? 'translateY(-650px)' : 'translateY(-550px)',
        config: { duration: 500 },
    });

    useEffect(() => {
        $(document.body).ready(() => {
            if(/Android|IPhone/i.test(navigator.userAgent)){
                navigate('/isMobile', { replace: true })
            }
            else{
                setTimeout(() => {
                    $("#main").fadeIn(200);
                }, 2000);
            }
        });

        
    
        const observer1 = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.01 }
        );
    
        if (ref.current) {
            observer1.observe(ref.current);
        }
    
        const observer2 = new IntersectionObserver(
            ([entry]) => {
                setInView2(entry.isIntersecting);
            },
            { threshold: 0.01 }
        );
    
        if (ref2.current) {
            observer2.observe(ref2.current);
        }
    
        return () => {
            if (ref.current) {
                observer1.unobserve(ref.current);
            }
            if (ref2.current) {
                observer2.unobserve(ref2.current);
            }
        };
    }, []);    

    return (  
        <div id="main">
            <div id="header" className="flex items-center">
                <Link to="/">
                <img src={moon} id="moon" className="h-10" alt="Moon Logo" />
                </Link>
                {'\u00A0'}
                <div id="head" className="flex items-center text-xl">
                    <Link to="/">
                        <span className="text-orange-400">MOON</span>
                        {'\u00A0'}
                        <span className="text-white">ANIMATOR</span>
                    </Link>
                    <Link to="/docs" id="docs">
                        <span>DOCS</span>
                    </Link>
                    <Link to="/download" id="download">
                        <span>DOWNLOAD</span>
                    </Link>
                    <Link to="/about" id="about">
                        <span>ABOUT</span>
                    </Link>
                    <Link to="/blog" id="blog">
                        <span>BLOG</span>
                    </Link>
                </div>
                <Link to="https://discord.gg/bPWuQKd" id="discord">
                    <i class="bi bi-discord" id="discord"></i>
                </Link>
            </div>
            <div className="flex items-center" id="flex_box">
                <iframe 
                    src="https://www.youtube.com/embed/rw6jgGPiIRc?autoplay=1&mute=1&controls=0&loop=1&playlist=rw6jgGPiIRc" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullscreen
                    loading="lazy"
                    id="main_vid">
                </iframe>
                <iframe 
                    src="https://www.youtube.com/embed/bh_fQ4Wz5NE?autoplay=1&mute=1&controls=0&loop=1&playlist=bh_fQ4Wz5NE" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullscreen
                    loading="lazy"
                    id="main_vid">
                </iframe>
                <iframe 
                    src="https://www.youtube.com/embed/hf6NWO8SRVY?autoplay=1&mute=1&controls=0&loop=1&playlist=hf6NWO8SRVY" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullscreen
                    loading="lazy"
                    id="main_vid">
                </iframe>
                <iframe 
                    src="https://www.youtube.com/embed/bI-vmTcETPY?autoplay=1&mute=1&controls=0&loop=1&playlist=bI-vmTcETPY" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullscreen
                    loading="lazy"
                    id="main_vid">
                </iframe>
            </div>
            <div className="flex items-center" id="flex_box">
                <iframe 
                    src="https://www.youtube.com/embed/Jd1qhYiD-JM?autoplay=1&mute=1&controls=0&loop=1&playlist=Jd1qhYiD-JM" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullscreen
                    loading="lazy"
                    id="main_vid">
                </iframe>
                <iframe 
                    src="https://www.youtube.com/embed/NcIZ3MNuvfU?autoplay=1&mute=1&controls=0&loop=1&playlist=NcIZ3MNuvfU" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullscreen
                    loading="lazy"
                    id="main_vid">
                </iframe>
                <iframe 
                    src="https://www.youtube.com/embed/eui0DDgcoN0?autoplay=1&mute=1&controls=0&loop=1&playlist=eui0DDgcoN0" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullscreen
                    loading="lazy"
                    id="main_vid">
                </iframe>
                <iframe 
                    src="https://www.youtube.com/embed/1fKYMJ4yqHY?autoplay=1&mute=1&controls=0&loop=1&playlist=1fKYMJ4yqHY" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullscreen
                    loading="lazy"
                    id="main_vid">
                </iframe>
            </div>
            <div id="title">
                <div className="flex items-center">
                    <img src={moon} width="200px" height="200px" />
                    {'\u00A0'}
                    {'\u00A0'}
                    {'\u00A0'}
                    {'\u00A0'}
                    <span className="text-orange-400" id="span">MOON</span>
                    {'\u00A0'}
                    <span className="text-white" id="span">ANIMATOR</span>
                </div>
                <span className="text-orange-400" id="catch">simple.effective.eazy</span>
            </div>
            <img src={fade} id="fade"></img>
            <div id="main_content">
                <svg class="wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="wave-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#f58e1f" stop-opacity="1" />
                            <stop offset="100%" stop-color="#ffb05b" stop-opacity="1" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#wave-gradient)" d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,154.7C672,171,768,181,864,181.3C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <img src={bg} id="bg" />
                <h1 id="catch_phrase">Animating, <br></br> just a bit <span id="ez"><i class="bi bi-stars"></i> easier <i class="bi bi-stars"></i></span>.</h1>
            </div>
            <div id="qna">
                <img src={bg2} id="bg2" />
                <h1 id="what">{'\u00A0'}What is <br />{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<span id="moon_txt">Moon{'\u00A0'}</span><span id="anim_txt">Animator</span>?</h1>
                <animated.article id="ans" style={styles} ref={ref}>Moon Animator is a popular plugin for Roblox Studio that allows users to create animations for their characters, objects, and cameras within the Roblox platform. It’s particularly useful for those who want to bring their Roblox creations to life with smooth and realistic animations.</animated.article>
            </div>
            <div id="ui">
                <img src={bg3} id="stars" />
                <img src={ui} id="gui" />
                <article id="explain_ui">the UI is both super easy to learn, and contains lots of feature, from the basic camera and keyframe editing to the advance wielding and non-rig manipulation.</article>
            </div>
            <div id="community">
                <img src={bg4} id="bg4"></img>
                <h1 id="com">Community- </h1>
                <article id="ans2">The moon animator community has a growing community base everyday, both in discord and roblox.</article>
                <div className="flex" id="icons">
                    <Link to="https://discord.com/invite/bPWuQKd" className="link">  
                        <i class="bi bi-discord"></i>
                    </Link>
                    <Link to="https://www.roblox.com/groups/5677095/Moon-Animator#!/about" className="link" id="link2">
                        <i class="bi bi-people-fill"></i>
                    </Link>
                </div>
                <div className="flex" id="container">
                    <h3 className="h3">Stop-motion</h3>
                    <iframe src="https://www.youtube.com/embed/-9jZQJNbSbs" frameborder="0" className="iframes"></iframe>
                    <h3 className="h3" id="h">Smooth-animation</h3>
                    <iframe src="https://www.youtube.com/embed/RKhtTsxO8bk" frameborder="0" className="iframes"></iframe>
                </div>
            </div>
            <div id="plugin">
                <img src={bg5} id="bg5"/>
                <h1 id="module">Plugins- </h1>
                <animated.article ref={ref2} style={styles2} id="explain-module">Moon animator plugins will help you get your animations to new heights, or to make them get finished faster</animated.article>
                <div id="webp-div" className="flex">
                    <img src="https://tr.rbxcdn.com/97689939a38d6fe665fcd82a897001f5/420/420/Image/Webp" className="webp" />
                    <img src="https://tr.rbxcdn.com/8f35982f18b846a8e4194c8211c72d99/420/420/Image/Webp" className="webp" />
                    <img src="https://tr.rbxcdn.com/6a3328c1c0268b0104a41ecea8718890/250/250/Image/Webp" className="webp" />
                    <img src="https://tr.rbxcdn.com/bbf504f5cf731b2017d6f3ea9f027f15/420/420/Image/Webp" className="webp" />
                </div>
            </div>
            <div id="get_started">
                <img src={bg6} id="bg6"/>
                <iframe id="basics_vid" src="https://www.youtube.com/embed/q8tGNMo_jHg"/>
                <article id="basics_art">get started in you moon animation career</article>
            </div>
            <div id="welcome">
                <img id="the_moon" src={moon} height="125px" width="125px" />
                <h3 id="elmoon">Welcome to the <br></br> Moon Animator community</h3>
                <Link to="/docs" id="redirect">
                    <button id="redir">Get Started</button>
                </Link>
            </div>
            <Outlet />
        </div>
    );
}
