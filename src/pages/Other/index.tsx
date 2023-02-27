import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

const Other: React.FC = () => {
  return (
    <div className="demo-relative demo-w-full demo-h-screen  demo-bg-slate-700">
      <div className="demo-absolute demo-top-1/2 demo-left-1/2 demo--translate-y-1/2 demo--translate-x-1/2 demo-w-[1024px]">
        <div className="demo-container demo-p-4 demo-mx-auto demo-text-center">
          <FontAwesomeIcon icon={brands('ethereum')} className="demo-pr-2 demo-text-4xl demo-text-white" />
          <h1 className="demo-text-4xl demo-flex demo-items-center demo-justify-center demo-text-white">Other Page</h1>
        </div>
        <div className="demo-mx-auto demo-mt-5  demo-flex  demo-items-center demo-justify-center">
          <Link to="/" className="demo-mr-5 demo-text-xl demo-text-white">
            <FontAwesomeIcon icon={solid('angle-left')} className="demo-pr-2 demo-text-2xl" />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Other;
