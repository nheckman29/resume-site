import "./Resume.scss";

interface Props {}

const Resume: React.FC<Props> = () => {
    return (
      <>
        <button className="btn btn-dark m-2"><a className="download" href='heckman-resume.pdf' download>Download</a></button>
        <iframe
          title="Nathan Heckman Resume"
          src="//drive.google.com/file/d/1S-ILAD1rR1HJjmep9mTmH697BSOk7KPO/preview"
          width="95%"
          height="800px"
          hidden={false}
        ></iframe>
      </>
    );
};

export default Resume;