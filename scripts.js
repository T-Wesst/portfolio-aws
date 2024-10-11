document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'Feb 2022 - Present',
        title: 'DevOps Engineer, Sony Interactive Entertainment',
        description: ''
    },
    {
        date: 'Aug 2021 - Jan 2022',
        title: 'Web Development Teaching Assistant, Trilogy Education Services ',
        description: ''
    },
    {
        date: 'Oct 2019 - Oct 2020',
        title: 'Self Employed, NextGen Crafters',
        description: ''
    },
    {
        date: 'Oct 2019 - Oct 2020',
        title: 'Engineering Intern, Snap Inc.',
        description: ''
    },
    {
        date: 'Nov 2018 - Sep 2019',
        title: 'Web Development Teaching Assistant, Trilogy Education Services ',
        description: ''
    },
    {
        date: 'Jul 2018 - Dec 2018',
        title: 'Business Development Intern, Headspace',
        description: ''
    }
];
const projectData = [
    {
        date: 'Feb 2022 - Present',
        title: 'Project 1',
        description: ''
    },
    {
        date: 'Aug 2021 - Jan 2022',
        title: 'Project 2',
        description: ''
    },
    {
        date: 'Oct 2019 - Oct 2020',
        title: 'Project 3',
        description: ''
    },
    {
        date: 'Oct 2019 - Oct 2020',
        title: 'Proejct 4',
        description: ''
    },
    {
        date: 'Nov 2018 - Sep 2019',
        title: 'Project 5',
        description: ''
    },
    {
        date: 'Jul 2018 - Dec 2018',
        title: 'Project 6',
        description: ''
    }
];

const projects = document.getElementById('project');
const timeline = document.getElementById('timeline');

    projectData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        projects.appendChild(entry);
    });

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
