document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: `Feb 2022 - Present`,
        title: 'DevOps Engineer, Sony Interactive Entertainment',
        description: `Specialized in automation and cloud infrastructure, having deployed large-scale Node.js applications with Terraform, cutting infrastructure provisioning time by 50%, and integrated Ansible playbooks for efficient AWS deployments. Developed a GitHub application that automates repo permission updates, saving over 150 hours of operational work, and used Python to reduce GitHub account suspension review time by 99%. I also created a workflow to update 100+ usernames and profiles, improving accuracy by 20%. My experience with Docker enhanced deployment speed by 40%, while troubleshooting Jenkins pipelines reduced build failures by 25%, sharpening my ability to streamline processes and boost efficiency.`
    },
    {
        date: `Aug 2021 - Jan 2022`,
        title: 'Web Development Teaching Assistant, Trilogy Education Services ',
        description: `Provided leadership and mentorship to over 23 students per semester, helping to enhance their web development skills. By debugging and improving the quality of student projects, I increased learning outcomes and efficiency by 25%. I led weekly two-hour discovery meetings to identify knowledge gaps and strengthen students' understanding of web development fundamentals. I also collaborated with instructional staff to implement tailored learning experiences and assisted in developing lesson plans and setting goals to improve student performance.`
    },
    {
        date: 'Oct 2019 - Oct 2020',
        title: 'Self Employed, NextGen Crafters',
        description: `Built internal tools to automate workflows, reducing operational work for clients and improving efficiency. I also redesigned web and mobile layouts for a high-traffic, subscription-based website, enhancing user experience. In addition, I mentored and led a small team of web engineers, providing guidance and support to drive project success.`
    },
    {
        date: 'Oct 2019 - Oct 2020',
        title: 'Engineering Intern, Snap Inc.',
        description: `led the redesign and development of the company's internal wiki, which spanned over 357 web pages. By writing reusable HTML and CSS widgets, I boosted the production of web content by 4%. I also developed and optimized Google Apps Script to automate responsive email templates via Google Sheets, saving 45 minutes of operational work each week. In addition, I designed responsive email templates using Gmail-supported CSS, enabling teams to test and deliver pixel-perfect internal communications. I contributed to the internal component library by building a scalable React component that displays authorized users' Bitmojis.`
    },
    {
        date: 'Nov 2018 - Sep 2019',
        title: 'Web Development Teaching Assistant, Trilogy Education Services ',
        description: `developed teaching materials for over 12 students and coordinated academic services to provide additional support. I utilized a variety of virtual tools, including Zoom, online chats, video assignments, and online whiteboards, to enhance the learning experience. By optimizing lesson plans, I improved the efficiency and flow of 30-60 minute sessions, helping students achieve better learning outcomes.`
    },
    {
        date: 'Jul 2018 - Dec 2018',
        title: 'Business Development Intern, Headspace',
        description: `Assisted in the development and management of corporate client account subscriptions, creating marketing presentations and surveys to boost student engagement and adoption. I analyzed and resolved JIRA tickets for approximately 233 B2B client accounts in Salesforce, helping the Customer Success team track client subscriptions and usage. On the front-end development side, I wrote well-structured HTML and modular CSS for mobile-responsive and cross-browser designs. I debugged errors using Chrome Developer Tools and integrated JavaScript components into applications. I also refactored Ember.js code and migrated partner account landing pages into Contentful. Throughout, I followed agile and scrum processes, using tools like Google Suite, Slack, JIRA, Git, GitHub, and Notion to collaborate and conduct code reviews. I tested the web application for bugs and ensured compatibility across various browsers and environments using BrowserStack.`
    }
];
const projectData = [
    {
        date: 'Feb 2022 - Present',
        title: 'Project 1',
        description: '',
        image: '',
    },
    {
        date: 'Aug 2021 - Jan 2022',
        title: 'Project 2',
        description: '',
        image: '',
    },
    {
        date: 'Oct 2019 - Oct 2020',
        title: 'Project 3',
        description: '',
        image: '',
    },
    {
        date: 'Oct 2019 - Oct 2020',
        title: 'Proejct 4',
        description: '',
        image: '',
    },
    {
        date: 'Nov 2018 - Sep 2019',
        title: 'Project 5',
        description: '',
        image: '',
    },
    {
        date: 'Jul 2018 - Dec 2018',
        title: 'Project 6',
        description: '',
        image: '',
    }
];

// const projects = document.getElementById('project');
const timeline = document.getElementById('timeline');

    // projectData.forEach((item, index) => {
    //     let entry = document.createElement('div');
    //     entry.classList.add('timeline-entry');
    //     entry.setAttribute('id', 'entry-' + index);

    //     let dot = document.createElement('div');
    //     dot.classList.add('timeline-dot');

    //     let date = document.createElement('div');
    //     date.textContent = item.date;
    //     date.classList.add('timeline-date');

    //     let content = document.createElement('div');
    //     content.classList.add('timeline-content');
    //     content.setAttribute('id', 'content-' + index);

    //     let title = document.createElement('h3');
    //     title.textContent = item.title;

    //     let description = document.createElement('p');
    //     description.textContent = item.description;
    //     description.style.display = 'none'; // Initially hide the description

    //     // Click event to toggle the description visibility
    //     entry.addEventListener('click', function() {
    //         description.style.display = description.style.display === 'none' ? 'block' : 'none';
    //     });

    //     content.appendChild(title);
    //     content.appendChild(description);

    //     entry.appendChild(dot);
    //     entry.appendChild(date);
    //     entry.appendChild(content);

    //     projects.appendChild(entry);
    // });

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
