import SectionHeader from '../elements/sectionHeader';

import SkillsData from '../../data/skills.json';

export default function Skills() {
  return (
    <div id='skills' className='py-6 text-justify'>
      <SectionHeader header='skills' />

      <article className='prose mx-auto mt-8 max-w-screen-2xl place-content-center px-2 text-justify lg:prose-xl md:px-4 lg:px-16'>
        <blockquote>
          <p>
            Morbi sodales metus quam, accumsan ullamcorper mi rutrum eget.
            Suspendisse eleifend tempor nulla, quis eleifend ante feugiat sit
            amet. Phasellus est ex, luctus nec ex at, ullamcorper blandit justo.
            Nam sollicitudin quis turpis non laoreet.
          </p>
        </blockquote>

        <h3>Primary:</h3>
        <div className='grid grid-cols-1 grid-rows-3 justify-between gap-4 md:grid-cols-2'>
          {SkillsData.primary.map((skill) => (
            <div className='w-full' key={skill.name}>
              <strong>{skill.name}: </strong>
              <progress
                className='progress'
                value={skill.value}
                max='100'
              ></progress>
            </div>
          ))}
        </div>

        <h3>Secondary:</h3>
        <div>
          {SkillsData.secondary.map((skill) => (
            <div key={skill} className='badge badge-outline badge-lg my-2 mr-4'>
              {skill}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
