import "bulma/css/bulma.css";
import Course from "./components/Course.tsx";

const java =
  "https://www.gcreddy.com/wp-content/uploads/2021/05/Java-Programming-Language.png";
const springBoot =
  "https://4.bp.blogspot.com/-ou-a_Aa1t7A/W6IhNc3Q0gI/AAAAAAAAD6Y/pwh44arKiuM_NBqB1H7Pz4-7QhUxAgZkACLcBGAs/s1600/spring-boot-logo.png";
const kafka =
  "https://www.andplus.com/hs-fs/hubfs/kafkalogo.jpg?width=3600&height=2013&name=kafkalogo.jpg";
const kubernetes =
  "https://blog.geekhunter.com.br/wp-content/uploads/2019/04/how-to-setup-webserver-on-Kubernetes-750x410-1.png.webp";

function App() {
  return (
    <div>
      <div className="hero is-primary">
        <div className="hero-body">
          <p className="title">Cources</p>
        </div>
      </div>
      <section className="section">
        <div className="columns">
          <div className="colum">
            <Course
              image={java}
              title="Java"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, ab ratione dolorem esse ad, voluptas laudantium iusto non similique animi natus eum atque, officia ea quibusdam ipsum repellat voluptates blanditiis?"
            />
          </div>
          <div className="colum">
            <Course
              image={springBoot}
              title="Spring Boot"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, ab ratione dolorem esse ad, voluptas laudantium iusto non similique animi natus eum atque, officia ea quibusdam ipsum repellat voluptates blanditiis?"
            />
          </div>
          <div className="colum">
            <Course
              image={kafka}
              title="Apache Kafka"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, ab ratione dolorem esse ad, voluptas laudantium iusto non similique animi natus eum atque, officia ea quibusdam ipsum repellat voluptates blanditiis?"
            />
          </div>
          <div className="colum">
            <Course
              image={kubernetes}
              title="Kubernetes"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, ab ratione dolorem esse ad, voluptas laudantium iusto non similique animi natus eum atque, officia ea quibusdam ipsum repellat voluptates blanditiis?"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
