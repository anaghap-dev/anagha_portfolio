// Example project data
const projects = [
  { title: 'Project 1', description: 'This is my first project.' },
  { title: 'Project 2', description: 'Another cool project I made.' },
  { title: 'Project 3', description: 'Learning JavaScript every day!' },
  { title: 'Project 4', description: 'Built a simple todo app.' },
];

// Render projects in the grid container
const projectList = document.getElementById('project-list');

projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'project-box';
  div.innerHTML = `<strong>${project.title}</strong><p>${project.description}</p>`;
  projectList.appendChild(div);
});

// Handle form submit
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name && email && message) {
    formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
    form.reset();
  } else {
    formMessage.textContent = 'Please fill in all fields.';
  }
});
