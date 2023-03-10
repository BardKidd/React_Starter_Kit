import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { getRandomMeal } from './request';
import * as React from 'react';

const Home: React.FC = () => {
  // const { mutate } = useMutation(() => getRandomMeal);
  const [meals, setMeals] = useState([]);

  const { data, isLoading, isError, isSuccess } = useQuery(['userData'], () => getRandomMeal, {
    staleTime: 5000,
    keepPreviousData: true,
    onSuccess: (res) => {
      setMeals(res?.data?.meals);
    },
  });

  return (
    <div className="demo-relative demo-w-full demo-h-screen  demo-bg-slate-700">
      <div className="demo-absolute demo-top-1/2 demo-left-1/2 demo--translate-y-1/2 demo--translate-x-1/2 demo-w-[1024px]">
        <div className="demo-container demo-p-4 demo-mx-auto demo-text-center">
          <div className="demo-bg-white">
            {/* <button
              type="button"
              className="demo-text-slate-700 demo-font-bold demo-text-2xl"
              onClick={() => {
                mutate();
              }}
            >
              切換!!
            </button> */}
          </div>
        </div>
        {meals.map((item: any) => {
          return <p key={item.idMeal}>{item.strMeal}</p>;
        })}

        <div className="demo-mx-auto demo-text-center demo-mt-5">
          <a
            target="_blank"
            href="https://github.com/BardKidd/base-starter-kit"
            className="demo-border demo-inline-block  demo-rounded demo-p-3 demo-bg-white demo-cursor-pointer demo-ease-in-out demo-duration-150 hover:demo-ring-4	"
          >
            <FontAwesomeIcon icon={brands('github')} className="demo-text-slate-700 demo-pr-2 demo-text-2xl" />
            <button type="button" className="demo-text-slate-700 demo-font-bold demo-text-2xl">
              GitHub
            </button>
          </a>
        </div>
        <div className="demo-mx-auto demo-mt-5 demo-flex  demo-items-center demo-justify-center">
          <Link to="/other" className="demo-text-xl demo-flex demo-items-center demo-text-white">
            Other
            <FontAwesomeIcon icon={solid('angle-right')} className="demo-pl-2 demo-text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
