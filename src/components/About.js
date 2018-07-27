import React, { Component } from 'react';
import './style/About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
              <center>
              <div className="wrapper">
                <center>
                <br/>
                <div className="img">
                  <img src="http://plasticdetox.me/static/media/PlantTheSeed.efba3275.png" alt=""/>
                </div>
                </center>
                <div>
                  <h1>Plant The Seed</h1>
                  <div>
                    <p>Plant the Seed partners with schools to provide influential educational experiences and content for teachers to immerse their learners in real-world challenges and support their development in becoming conscious, connected and courageous solutionaries.</p>
                    <p>Our experiences and content use key methodologies such as project-and thematic-based-learning and design thinking.</p>
                    <p>Our services enable teachers to engage their learners in practicing core skills such as critical, systems and creative thinking, collaboration and problem-solving.</p>
                    <p>Impact to date: <br/> Plant the Seed have run 25 programmes in 14 schools and have worked with over 2000 learners. We have partnered with some amazing organisations who strengthen our educational content and experiences.</p>
                  </div>
                </div>
              </div>
              </center>
            </div>
        )
    }
}

export default About;
