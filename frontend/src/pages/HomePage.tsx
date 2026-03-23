import PortfolioLayout from "../components/layout/PortfolioLayout"
import Hero from "../components/portfolio/Hero"
import Capabilities from "../components/portfolio/Capabilities"
import Experience from "../components/portfolio/Experience"
import Projects from "../components/portfolio/Projects"
import ChatPanel from "../components/chat/ChatPanel"



export default function HomePage() {
    return (
        <PortfolioLayout 
            leftPane={
                <>
                    <Hero />
                    <Capabilities />
                    <Projects />
                    <Experience />
                </>
            } 
            rightPane={
                <>
                    <ChatPanel />
                </>
            } 
            
            
        />
    )
}