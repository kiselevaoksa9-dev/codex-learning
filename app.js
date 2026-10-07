const projects = [
  {name: 'Мираклион', category: 'РАЗВИТИЕ И ВОЗМОЖНОСТИ', icon: '✦', theme: 'purple', status: 'В работе', task: 'Подготовить программу осенних встреч', person: 'Анна Кузнецова', initials: 'АК', date: '2026-10-12', due: '12 октября', note: 'Программа и мероприятия'},
  {name: 'ЧудоЁлка', category: 'ПРАЗДНИК ДЛЯ КАЖДОГО', icon: '♧', theme: 'mint', status: 'В работе', task: 'Согласовать список подарков', person: 'Мария Соколова', initials: 'МС', date: '2026-10-15', due: '15 октября', note: 'Подготовка новогоднего проекта'},
  {name: 'Служба координаторов', category: 'КОМАНДА И ПРОЦЕССЫ', icon: '◎', theme: 'blue', status: 'Нужно внимание', task: 'Утвердить график дежурств', person: 'Дмитрий Волков', initials: 'ДВ', date: '2026-10-09', due: '9 октября', note: 'Координация ежедневной работы'},
  {name: 'Служба психологов', category: 'ЗАБОТА И ПОДДЕРЖКА', icon: '♡', theme: 'rose', status: 'В работе', task: 'Подготовить план групповых консультаций', person: 'Елена Смирнова', initials: 'ЕС', date: '2026-10-14', due: '14 октября', note: 'Психологическая помощь и сопровождение'}
];
const grid = document.querySelector('#project-grid');
function render(query = '') {
  const filtered = projects.filter(project => project.name.toLocaleLowerCase('ru').includes(query.trim().toLocaleLowerCase('ru')));
  grid.innerHTML = filtered.map(project => `<article class="card ${project.theme}"><div class="card-top"><span class="project-icon" aria-hidden="true">${project.icon}</span><span class="status ${project.status === 'Нужно внимание' ? 'attention' : ''}"><i></i>${project.status}</span></div><div class="category">${project.category}</div><h3>${project.name}</h3><p class="description">${project.note}</p><div class="task"><span class="field-label">БЛИЖАЙШАЯ ЗАДАЧА</span><p><span class="task-check" aria-hidden="true"></span>${project.task}</p></div><div class="card-bottom"><div><span class="field-label">ОТВЕТСТВЕННЫЙ</span><div class="person"><span class="avatar">${project.initials}</span>${project.person}</div></div><div class="deadline"><span class="field-label">СРОК</span><time datetime="${project.date}">${project.due}</time></div></div></article>`).join('');
  document.querySelector('#empty').hidden = filtered.length > 0;
}
document.querySelector('#search').addEventListener('input', event => render(event.target.value));
render();
