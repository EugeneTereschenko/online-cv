import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resume } from './resume.model';
import { Title } from '@angular/platform-browser';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Resume CV | Yevhen Tereshchenko');
  }

  isDarkMode = false;

  resume: Resume = {
    name: 'Yevhen Tereshchenko',
    location: 'Dnipro, Ukraine',
    email: 'tereschenko.eugene@gmail.com',
    phone: '099-063-1838',
    linkedin: 'linkedin.com/in/yevhen-tereshchenko',
    github: 'github.com/EugeneTereschenko',
    summary: `Junior Java Developer with around 8 years of professional IT experience as a Linux 
      System Administrator and DevOps Engineer. Skilled in Java, SQL, Spring Technologies 
      (Spring Core, Spring MVC, Spring Boot) and Web Technologies (HTML, JavaScript, CSS). 
      Experienced in Agile, Scrum, TDD, microservices, REST APIs, and CI/CD pipelines.`,
    skills: {
      programming: ['Java', 'HTML', 'CSS', 'JavaScript', 'Bash', 'Angular'],
      frameworks: ['Spring Boot', 'Spring MVC', 'Spring Data'],
      devops: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Zabbix', 'Apache Solr', 'Google Cloud'],
      sql: ['MySQL', 'PostgreSQL'],
      vcs: ['GitHub', 'GitLab'],
      tools: ['IntelliJ IDEA', 'Postman', 'JIRA', 'Redmine', 'Copilot'],
      languages: ['Ukrainian (native)', 'Russian (native)', 'English (B1)']
    },
    experience: [
      {
        role: 'Junior Java Developer',
        company: 'Epam System',
        location: 'Dnipro, Ukraine',
        period: 'Jul 2024 – Feb 2025',
        details: [
          'Created AWS Lambda function, using API Gateway',
          'Worked with SQS, SNS, EventBridge, DynamoDB',
          'Developed RESTful API with Spring, implemented CRUD operations'
        ]
      },
      {
        role: 'Trainee Java Developer',
        company: 'Epam System',
        location: 'Dnipro, Ukraine',
        period: 'Jul 2021 – Jul 2024',
        details: [
          'LMS system project: implemented Spring MVC controllers, integrated LTI',
          'Engineered ORM with Hibernate for Java–DB mapping',
          'Used Git and JIRA for version control and task tracking'
        ]
      },
      {
        role: 'Engineer, Information Technology Head Office',
        company: 'PrivatBank',
        location: 'Dnipro, Ukraine',
        period: 'Jul 2014 – Jan 2017',
        details: [
          'Created bash scripts for FreeBSD and Linux',
          'Maintained Docker and Nginx configurations',
          'Implemented Jenkins CI/CD, Zabbix & Kibana monitoring'
        ]
      },
      {
        role: 'Engineer, Information Technology Head Office',
        company: 'PrivatBank',
        location: 'Dnipro, Ukraine',
        period: 'Oct 2010 – Sep 2011',
        details: ['Maintained Databases']
      },
      {
        role: 'Database Administrator',
        company: 'Dnepropress',
        location: 'Dnipro, Ukraine',
        period: 'Aug 2008 – Aug 2010',
        details: [
          'Created mail service setup (Postfix, Cyrus-IMAP, Roundcube WebMAIL, Apache, MySQL)'
        ]
      },
      {
        role: 'Engineer, Researcher',
        company: 'University of Technology',
        location: 'Dnipro, Ukraine',
        period: 'Nov 2005 – Nov 2007',
        details: ['Researching']
      }
    ],
    education: [
      { school: 'University of Technology, Dnipro, Ukraine', degree: 'Master of Mechanical Engineering', year: '2005' }
    ],
    certificates: [
      { name: 'AWS Certified Developer – Associate', period: 'Sept 2024 - Sept 2027' }
    ],
    projects: [
      {
        name: 'The Book Nook',
        links: [
          'github.com/EugeneTereschenko/library_application',
          'github.com/EugeneTereschenko/library-app'
        ],
        description: [
          'Library system with CRUD operations for managing books, authors, and borrowers'
        ],
        tech: 'Spring Boot, JWT, H2, Angular'
      },
      {
        name: 'Web Chat',
        links: [
          'github.com/EugeneTereschenko/webchat',
          'github.com/EugeneTereschenko/websocket_demo'
        ],
        description: ['Web chat for messaging'],
        tech: 'Spring Boot, JWT, H2, JavaScript'
      }
    ]
  };

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }


  // ✅ Download Resume as PDF
  downloadPDF() {
    const resumeElement = document.querySelector('.resume-container') as HTMLElement;
    if (!resumeElement) return;

    html2canvas(resumeElement, { scale: 2 }).then(canvas => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Yevhen_Tereshchenko_Resume.pdf');
    });
  }
}

