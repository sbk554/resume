import { useState } from 'react';
import { skillCategories, skills } from '../data/skills';
import SectionHead from '../components/SectionHead';
import Segmented from '../components/Segmented';
import { IconTile } from '../components/Media';
import Reveal from '../components/Reveal';

const categoryLabel = Object.fromEntries(skillCategories.map((c) => [c.id, c.label]));

export default function Skills() {
  const [category, setCategory] = useState('all');
  const list = category === 'all' ? skills : skills.filter((s) => s.category === category);

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead
          eyebrow="Skills"
          title={<span id="skills-title">기술스택.</span>}
          aside={<Segmented items={skillCategories} value={category} onChange={setCategory} label="기술 분류" />}
        />

        <ul className="skills__grid">
          {list.map((skill, i) => (
            <Reveal
              as="li"
              key={skill.name}
              className="card card--sm skill-card"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }} // 한 줄(4개) 안에서 순차 등장
            >
              <IconTile icon={skill.icon} short={skill.short} />
              <div className="skill-card__info">
                <div className="skill-card__name">
                  <span className="label-large">{skill.name}</span>
                  <span className="badge">{categoryLabel[skill.category]}</span>
                </div>
                <p className="body-small text-muted">{skill.desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
