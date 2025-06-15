// src/translations.js
export const translations = {
  en: {
    committee: {
      assignments: {
        title: 'Committee Assignments',
        committee: 'Committee',
        task: 'Task',
        due: 'Due Date',
        add: 'Add Assignment',
      },
      details: {
        tabs: {
          overview: 'Overview',
          members: 'Members',
          meetings: 'Meetings',
          documents: 'Documents',
        },
      },
      meetings: {
        title: 'Meetings',
        schedule: 'Schedule Meeting',
        updated: 'Meeting updated.',
        scheduled: 'Meeting scheduled.',
      },
      feedback: {
        title: 'Committee Feedback',
        enter: 'Enter feedback...',
        send: 'Send',
      },
      validation: {
        allFieldsRequired: 'All fields are required.',
      },
    },
    meeting: {
      details: {
        title: 'Meeting Details (ID: {{id}})',
        tabs: {
          agenda: 'Agenda',
          minutes: 'Minutes & Decisions',
          attendance: 'Attendance',
          tasks: 'Tasks / Follow-ups',
          documents: 'Documents',
          link: 'Meeting Link / Calendar',
        },
      },
    },
    committee: {
      deprecated: {
        title: 'This committee section is deprecated.',
        body: 'Please use the main Committee Dashboard and Add Committee routes for all committee management. (If you are seeing this message, update your navigation/menu to use the new dashboard and modal-based UI.)',
      },
    },
    documents: {
      title: 'Documents Repository',
      table: {
        committee: 'Committee',
        meeting: 'Meeting',
        document: 'Document',
        type: 'Type',
      },
    },
    actionItems: {
      title: 'Action Items Tracker',
      filter: {
        allCommittees: 'All Committees',
        allStatuses: 'All Statuses',
        open: 'Open',
        done: 'Done',
      },
      table: {
        committee: 'Committee',
        meeting: 'Meeting',
        action: 'Action',
        status: 'Status',
      },
      status: {
        open: 'Open',
        done: 'Done',
      },
    },
    attendance: {
      title: 'Attendance Overview',
      table: {
        committee: 'Committee',
        meeting: 'Meeting',
        present: 'Present',
        absent: 'Absent',
      },
    },
    meeting: {
      upcoming: 'Upcoming Meetings',
      table: {
        committee: 'Committee',
        title: 'Title',
        date: 'Date',
        status: 'Status',
      },
      status: {
        upcoming: 'Upcoming',
      },
    },
    // Common translations
    appTitle: 'Strategic Planning',

    help: 'Help',
    notifications: 'Notifications',
    noNewNotifications: 'No new notifications',
    settings: 'Settings',
    changeLanguage: 'Change Language',
    logout: 'Logout',
    addTag: 'Add tag',

    selectProject: 'Select Project',
    projectData: 'Project Data',
    newProject: 'New Project',
    editProject: 'Edit Project',
    createProject: 'Create Project',
    startDate: 'Start Date',
    endDate: 'End Date',
    progress: 'Progress',
    targetDate: 'Target Date',
    budget: 'Budget',
    impact: 'Impact',
    category: 'Category',

    update: 'Update',
    add: 'Add',
    delete: 'Delete',
    edit: 'Edit',
    save: 'Save',
    cancel: 'Cancel',

    // Organization & Permissions
    organizationPermissions: {
      title: 'Organization Permissions',
      orgChartTitle: 'Organization Chart',
      orgChart: {
        addUnit: 'Add Unit',
        editUnit: 'Edit Unit',
        deleteUnit: 'Delete Unit',
        moveUnit: 'Move Unit',
        selectTarget: 'Select Target',
        unitName: 'Unit Name',
        addSubunit: 'Add Subunit',
        newUnitName: 'New Unit Name'
      },
      permissionsTree: {
        addPermission: 'Add Permission',
        addTask: 'Add Task',
        addProcedure: 'Add Procedure',
        addForm: 'Add Form',
        edit: 'Edit',
        delete: 'Delete',
        save: 'Save',
        cancel: 'Cancel',
        namePlaceholder: 'Enter name...'
      },
      regulations: {
        addRegulation: 'Add Regulation',
        edit: 'Edit',
        delete: 'Delete',
        save: 'Save',
        cancel: 'Cancel',
        upload: 'Upload File',
        regulationName: 'Regulation Name'
      }
    },
    back: 'Back',
    next: 'Next',
    submit: 'Submit',
    confirm: 'Confirmation',
    status: 'Status',
    type: 'Type',

    name: 'Name',
    mobile: 'Mobile',
    email: 'Email',
    organization: 'Organization',
    externalOrganization: 'External Organization',
    department: 'Department',
    role: 'Role',
    jobTitle: 'Job Title',
    nameHeader: 'Name',
    descriptionHeader: 'Description',
    stakeholders: 'Stakeholders',
    notes: 'Notes',
    actions: 'Actions',
    priority: 'Priority',
    impact: 'Impact',

    title: 'Title',
    description: 'Description',

    tags: 'Tags',
    addTag: 'Add tag',
    comingSoon: 'Coming Soon...',
    enterDetails: 'Enter details here...',
    enterDescription: 'Enter description here...',
    enterTitle: 'Enter title here...',

    basicInfo: {
      title: 'Basic Info',
      description: 'Manage basic project information',
      projectName: 'Project Name',
      responsiblePerson: 'Responsible Person',
      organizationName: 'Organization Name',
      documents: 'Documents',
      planningTeam: 'Planning Team',
      monitoring: 'Monitoring',
      saveAndExit: 'Save and Exit',
      confirmationMessage: 'Are you sure you want to submit this project?',
      name: 'Name',
      organization: 'Organization',
      relation: 'Relation',
      contactInfo: 'Contact Info',
      target: 'Target',
      source: 'Source',
      addStakeholder: 'Add Stakeholder',
      endDate: 'endDate',
      expectedOutcomes: 'expectedOutcomes',
      location: 'location',
      mainTopics: 'mainTopics',
      numberOfTrainees: 'numberOfTrainees',
      targetAudience: 'targetAudience',
      trainer: 'trainer',
      Content: 'training.Content',
      trainingHours: 'trainingHours',
      trainingType: 'trainingType',
      addIndicator: 'Add Indicator',
      generalNotes: 'generalNotes',
      performanceIndicators: 'performanceIndicators',
      startDate: 'startDate',
      addMember: 'addMember',
      committeeName: 'committeeName',
      committeeRole: 'committeeRole',
      department: 'department',
      externalOrganization: 'externalOrganization',
      membershipStart: 'membershipStart',
      planningTeam: 'planningTeam',
      upLoadFile: 'upLoadFile',
      selectStakeholders: 'selectStakeholders',
      committees: 'committees',
      confirmationTitle: 'confirmationTitle',
      documentsTitle: 'documentsTitle',
      evaluationTitle: 'evaluation Title',
      planningTeamTitle: 'planning Team Title',
      externalTeam: 'externalTeam',
      internalTeam: 'internalTeam',
      projectObjectives: 'projectObjectives',
      relatedProjects: 'relatedProjects',
      selectProject: 'selectProject',
      frequency: 'frequency',
      contactInfo: 'contactInfo'
    },

    evaluation: {
      title: 'Evaluation',
      description: 'Evaluate project performance',
      addKpi: 'Add KPI',
      addRisk: 'Add Risk',
      contingency: 'Contingency',
      keyPerformanceIndicators: 'Key Performance Indicators',
      kpiName: 'KPI Name',
      kpiDescription: 'KPI Description',
      mitigation: 'Mitigation',
      monitoring: 'Monitoring',
      objectives: 'Objectives',
      owner: 'Owner',
      probability: 'Probability',
      projectObjectives: 'Project Objectives',
      responsibleParty: 'Responsible Party',
      riskAssessment: 'Risk Assessment',
      riskDescription: 'Risk Description',
      targetValue: 'Target Value',
      unit: 'Unit',
      objectives: 'Objectives',
      projectObjectives: 'Project Objectives',
      frequency: 'Frequency',
      impact: 'Impact',
      successCriteria: 'Success Criteria'
    },

    strategicAnalysis: {
      title: 'Strategic Analysis',
      description: 'Analyze internal and external factors affecting your organization',
      pageTitle: 'Strategic Analysis',
      pageDescription: 'Analyze internal and external factors affecting your organization',

      menu: {
        foundation: 'Strategic Foundation',
        foundationDesc: 'Define the fundamental elements of your strategic plan',
        mandates: 'Mandates & Responsibilities',
        mandatesDesc: 'Document formal and informal mandates',
        mission: 'Mission Statement',
        missionDesc: 'Define and articulate mission statement',
        external: 'External Environment',
        externalDesc: 'Analyze forces, trends and stakeholder needs',
        internal: 'Internal Environment',
        internalDesc: 'Review objectives, resources and performance',
        analysis: 'Data Analysis',
        analysisDesc: 'SWOT analysis and matrix formulation',
        reengineering: 'Business Reengineering',
        reengineeringDesc: 'Build a data table for description and attachment uploads, linked to the governance table as follows: \n1- Organizational Structure: Flexible hierarchical fields for levels (level 1, 2, 3, etc.), with each level recording the name of the department or unit as needed.\n2- Authorities: Text fields linked to each level for recording authorities, flexible for any number.\n3- Tasks: Text fields linked to each authority for recording tasks, flexible for any number.\n4- Procedures: Text fields linked to each task for recording procedures, flexible for any number.\n5- Regulations and Policies: Fields for names of regulations or policies by type, with ability to upload attachments.'
      },

      foundation: {
        title: 'Strategic Foundation',
        description: 'Define the fundamental elements of your strategic plan',
        subtitle: 'Define the fundamental elements of your strategic plan',
        principles: 'Principles and Values',
        principlesDesc: 'Define the core principles and values that guide your organization',
        currentState: 'Current State',
        currentStateDesc: 'Assess your organization\'s current position and capabilities',
        stakeholders: 'Stakeholders',
        stakeholdersDesc: 'Identify and analyze key stakeholders and their needs',
        performance: 'Performance Indicators',
        performanceDesc: 'Define key performance indicators and metrics',
        addPrinciple: 'Add Principle',
        editPrinciple: 'Edit Principle',
        deletePrinciple: 'Delete Principle',
        principleTitle: 'Title',
        principleDesc: 'Description',
        principleType: 'Type',
        principleValue: 'Value',
        principlePriority: 'Priority',
        principleStatus: 'Status',
        principleNotes: 'Notes',
        responsibleTeam: 'Responsible Team',
        priority: 'Priority',
        status: 'Status',
        principleTypes: {
          core: 'Core',
          operational: 'Operational',
          strategic: 'Strategic'
        },
        principlePriorityLevels: {
          high: 'High',
          medium: 'Medium',
          low: 'Low'
        },
        principleStatusTypes: {
          active: 'Active',
          draft: 'Draft',
          archived: 'Archived'
        },
      },
      purposeAndPhilosophy: {
        title: 'Purpose and Philosophy',
        description: 'Describe Purpose, Philosophy, identity an function Details',
        purpose: 'Purpose',
        philosophy: 'Philosophy',
        identity: 'Identity',
        identityDescription: 'Identity Description',
        identityHelperText: 'Describe the organization\'s identity and core values',
        function: 'Function',
        functionDescription: 'Function Description',
        functionHelperText: 'Describe the organization\'s key functions'
      },

      mandates: {
        title: 'Mandates & Responsibilities',
        description: 'Document formal and informal mandates',
        formalMandates: 'Formal Mandates',
        formalMandatesDesc: 'List official mandates and regulations',
        informalMandates: 'Informal Mandates',
        informalMandatesDesc: 'Note informal expectations and norms',
        responsibilities: 'Core Responsibilities',
        responsibilitiesDesc: 'Define key organizational duties',
        newMandate: 'New Mandate',
        newResponsibility: 'New Responsibility',
        addNewMandate: 'Add new mandate',
        addNewResponsibility: 'Add new responsibility',
      },

      mission: {
        title: 'Mission Statement',
        description: 'Define and formulate your mission statement',
        subtitle: 'Define and formulate your mission statement',
        suggestedTitle: 'AI Suggested Mission Statements',
        suggestedDesc: 'Mission statements suggested by AI based on your input',
        editableTitle: 'Working Draft',
        editableDesc: 'Edit and refine your mission statement',
        finalTitle: 'Final Mission Statement',
        finalDesc: 'Your approved mission statement',
        generateButton: 'Generate Suggestions',
        copyToEditable: 'Use as Draft',
        copyToFinal: 'Approve Statement',
        noSuggestions: 'No suggestions yet. Click Generate to get AI suggestions.',
        noStatement: 'No mission statement approved yet.',
        placeholder: 'Enter mission statement...'
      },
      external: {
        title: 'External Environment',
        description: 'Analyze forces, trends and stakeholder needs',
        pestAnalysis: 'PEST Analysis',
        political: 'Political Factors',
        politicalDesc: 'Analyze political and regulatory impacts',
        economic: 'Economic Factors',
        economicDesc: 'Analyze economic and financial factors',
        social: 'Social Factors',
        socialDesc: 'Analyze social and cultural trends',
        technological: 'Technological Factors',
        technologicalDesc: 'Analyze technological developments',
        stakeholderAnalysis: 'Stakeholder Analysis',
        beneficiaries: 'Beneficiaries',
        beneficiariesDesc: 'Analyze beneficiary needs and expectations',
        funders: 'Funders',
        fundersDesc: 'Analyze funder requirements and expectations',
        opportunities: 'Opportunities',
        threats: 'Threats'
      },
      internal: {
        title: 'Internal Environment',
        description: 'Review objectives, resources and performance',
        subtitle: 'Review objectives, resources and performance',
        objectives: 'Objectives',
        objectivesDesc: 'Review current objectives',
        services: 'Services',
        servicesDesc: 'Evaluate services and programs',
        culture: 'Organizational Culture',
        cultureDesc: 'Analyze values and practices',
        resources: 'Resources',
        resourcesDesc: 'Assess available resources',
        financial: 'Financial Resources',
        human: 'Human Resources',
        performance: 'Performance',
        performanceDesc: 'Evaluate performance metrics',
        strengths: 'Strengths',
        weaknesses: 'Weaknesses',
        rating: 'Rating',
      },
      analysis: {
        title: 'Data Analysis',
        description: 'SWOT analysis and matrix formulation',
        subtitle: 'SWOT analysis and matrix formulation',
        swotTitle: 'SWOT Matrix',
        swotDesc: 'Analyze strengths, weaknesses, opportunities and threats',
        strengths: 'Strengths',
        weaknesses: 'Weaknesses',
        opportunities: 'Opportunities',
        threats: 'Threats',
        add: 'Add item',
        strategicIssues: 'Strategic Issues',
        issuesDesc: 'Key challenges and opportunities',
        itemPlaceholder: 'Item Placeholder',
        matrixDesc: 'Matrix Description',
        matrixPlaceholder: 'Matrix Placeholder',
        matrixTitle: 'Matrix Title'
      }
    },

    strategyFormulation: {
      title: 'Strategy Formulation',
      description: 'Develop strategic objectives and action plans',
      pageTitle: 'Strategy Formulation',
      pageDescription: 'Develop strategic objectives and action plans',
      menu: {
        initialView: 'Initial View and Strategic Directions',
        visionChallenges: 'Vision and Challenges',
        strategicIssues: 'Strategic Issues',
        goalsObjectives: 'Goals and Objectives Formulation',
        objectivesProjects: 'Objectives Deployment and Projects',
        coordination: 'Coordination and Integration',
        executivePlans: 'Executive Plans and Budgets'
      },
      initialView: {
        title: 'Initial View and Strategic Directions',
        subtitle: 'Initial View and Strategic Directions',
        items: {
          leadershipExpectations: 'Identify leadership expectations and organizational trends',
          employeeExpectations: 'Employee expectations',
          stakeholderRequirements: 'Identify beneficiary requirements (clients, employees, community...)',
          nationalDevelopment: 'Monitor national development plan trends',
          globalTrends: 'Study global trends and future foresight',
        }
      },
      visionChallenges: {
        title: 'Vision and Challenges',
        subtitle: 'Vision and Challenges',
        items: {
          visionElements: 'Agree on and formulate vision elements',
          challengesMatrix: 'Describe the matrix of challenges facing the organization',
          successIndicators: 'Identify vision success indicators',
          realityGap: 'Identify the gap between reality and vision',
          actions: 'Actions',
          priority: 'Priority',
          impact: 'Impact'
        }
      },
      strategicIssues: {
        title: 'Strategic Issues',
        subtitle: 'Strategic Issues',
        items: {
          issuesList: 'Prepare list of strategic issues',
          keyFactors: 'Identify factors that make each issue strategically essential',
          failureConsequences: 'Identify consequences of failure for each issue',
          issuesDescription: 'Describe and approve strategic issues',
          prioritization: 'Schedule issues according to priority',
          enterDescription: 'Enter description',
          enterTitle: 'Enter title',
          implications: 'Implications',
          opportunities: 'Opportunities',
          priorities: 'Priorities'
        }
      },
      goalsObjectives: {
        title: 'Goals and Objectives Formulation',
        subtitle: 'Goals and Objectives Formulation',
        items: {
          description: 'Formulate goals and objectives',
          strategicGoals: 'Formulate strategic goals',
          objectivesFormulation: 'Formulate strategic objectives for each goal',
          strategySelection: 'Describe and select strategy and evaluate alternatives',
          obstaclesAndAlternatives: 'Identify obstacles and present alternative solutions',
          strategyReview: 'Review selected strategy and link it to vision and goals',
          strategicGoals: 'Strategic Goals',
          objectivesFormulation: 'Objectives Formulation',
          strategySelection: 'Strategy Selection',
          obstaclesAndAlternatives: 'Obstacles and Alternatives',
          strategyReview: 'Strategy Review',
          objectivesGoals: 'Objectives Goals',
          performanceIndicators: 'Performance Indicators',
          timeline: 'Timeline',
          objectivesList: 'Objectives List'
        }
      },
      objectivesProjects: {
        title: 'Objectives Deployment and Projects',
        subtitle: 'Objectives Deployment and Projects',
        items: {
          objectivesDistribution: 'Distribute strategic objectives to departments',
          projectsPrograms: 'Build projects and programs for each objective by department',
          requirements: 'Identify financial and administrative requirements for implementation',
          documentation: 'Document projects and programs',
          addStakeholder: 'Add Stakeholder',
          stakeholders: 'Stakeholders'
        }
      },
      coordination: {
        title: 'Coordination and Integration',
        subtitle: 'Coordination and Integration',
        items: {
          internalCoordination: 'Coordinate between projects and programs internally',
          externalCoordination: 'Coordinate with external entities',
          objectivesMatrix: 'Draw objectives matrix with implementation strategies',
          plansMatrix: 'Draw plans and programs matrix with implementing entities'
        }
      },
      executivePlans: {
        title: 'Executive Plans and Budgets',
        subtitle: 'Executive Plans and Budgets',
        items: {
          description: 'Develop executive plans and budgets',
          contents: 'Contents:',
          planningProcess: 'Planning Process',
          budgetAllocation: 'Budget Allocation',
          timeframes: 'Timeframes',
          responsibilities: 'Responsibilities',
          dateRange: 'Date Range',
          responsible: 'Responsible'
        }
      }
    },

    execution: {
      title: 'Execution English',
      description: 'Executin of the Strategy Plan',
      executivePlans: 'Executive Plans and Budgets',
      projectsStatus: 'projects Status',
      projectsLink: 'Link each project to strategic objectives',
      feedbackAlerts: 'Feedback alerts',
      communicationBoard: 'Communication board',
      supportPrograms: 'Support programs',
      roadmapFilter: 'Roadmap filter',
      menu: {
        mainTitle: 'Monitoring Menu English', // A general title for this menu block, if needed
        setup: 'Setup',
        communication: 'Communication',
        roadmap: 'Roadmap',
        resources: 'Resources',
        feedback: 'Feedback',
        projects: 'Projects',
        support: 'Support & Challenges',
        alignment: 'Dynamic Linking'
      },
      roadmap: {
        title: 'Execution Guide & Roadmap',
        description: 'Design a clear implementation guide.',
        contents: 'Contents:',
        table: 'Interactive timeline table.',
        taskBox: 'Task boxes (task, time, reason, owner, method).',
        filter: 'Filter by owner or phase.'
      },
      resources: {
        title: 'Resources & Support Management',
        description: 'Provide HR and admin support for ',
        contents: 'Contents:',
        staff: 'Staff/admin support log.',
        req: 'Resource request form.',
        track: 'Track and assign resources.',
        integration: 'Integrate with HR if available.'
      },
      feedback: {
        title: 'Data & Feedback',
        description: 'Design feedback networks and update data.',
        contents: 'Contents:',
        input: 'Progress data entry.',
        chart: 'Update/notes chart.',
        reports: 'Periodic feedback reports.',
        alerts: 'Automatic alerts for delays.'
      },
      projects: {
        title: 'Projects & Initiatives Execution',
        description: 'Apply execution plans by schedule and level.',
        contents: 'Contents:',
        gantt: 'Task/project Gantt chart.',
        groups: 'Initiative change groups.',
        status: 'Project status (in progress, late, complete...).',
        link: 'Link each project to strategic objectives.'
      },
      support: {
        title: 'Field Support & Challenges',
        description: 'Identify and manage field challenges.',
        contents: 'Contents:',
        log: 'Field log (visit, note, challenge).',
        resistance: 'Change resistance analysis.',
        programs: 'Change programs matrix.'
      },
      alignment: {
        title: 'Dynamic Linking: Plan & Reality',
        description: 'Reconnect initiatives with operations.',
        contents: 'Contents:',
        compare: 'Compare initiative goals and actual results.',
        board: 'Alignment board',
        compare: 'Alignment compare',
        contents: 'Alignment contents',
        desc: 'Alignment description',
        title: 'Alignment title',
        warnings: 'Alignment warnings'
      },
      communication: {
        title: 'communication',
        description: 'Desc',
        contents: 'Contents:',
        board: 'Board',
        channels: 'Channels',
        contents: 'Contents',
        desc: 'Desc',
        log: 'Log',
        notifications: 'Notifications',
        publish: 'Publish',
        title: 'Title',
        upload: 'Upload'
      },

      setup: {
        Title: 'Setup',
        Assign: 'Assign',
        Contents: 'Contents',
        Desc: 'Desc',
        Doc: 'Doc',
        DocInput: 'DocInput',
        Org: 'Org',
        OrgChart: 'OrgChart',
        Schedule: 'Schedule',
        TeamsMatrix: 'TeamsMatrix'
      }
    },

    monitoring: {
      title: "Title",
      description: "Monitoring the strategy plan and followup it",
      menu: {
        mainTitle: "Monitoring Menu",
        tools: "Monitoring Tools",
        kpis: "KPIs",
        feedbackForms: "Forms & Feedback",
        planReview: "Plan Review",
        statAnalysis: "Statistical Analysis",
        deviations: "Deviations & Actions",
        approval: "Results Approval",
        reformulation: "Strategy Update",
        sustainability: "Sustainability Renewal"
      },
      tools: {
        title: "Monitoring and Evaluation Tools",
        description: "Description for monitoring tools",
        contents: {
          monitoringTimeline: "Define monitoring timelines",
          uploadFiles: "Upload tracking files/forms (PDF, Excel...)"
        }
      },
      kpis: {
        title: "Key Performance Indicators (KPIs)",
        description: "Define KPIs for goals, assign responsibility, set target/actual values, and track with charts.",
        contents: {
          defineKpis: "Define KPIs for goals and objectives",
          assignResponsibility: "Assign responsibility for each indicator",
          targetActualValues: "Target and actual values",
          trackCharts: "Charts for tracking indicators"
        }
      },
      feedbackForms: {
        title: "Forms and Feedback",
        description: "Access monitoring forms, upload feedback reports from departments, and view comparison reports.",
        contents: {
          monitoringForms: "Ready-made and customizable monitoring forms",
          uploadFeedback: "Upload feedback reports from departments",
          comparisonReports: "Comparison reports between expected and achieved"
        }
      },
      planReview: {
        title: "Plan Review and Internal Integration",
        description: "Verify linkage and integration, and review modification logs.",
        contents: {
          verificationTools: "Tools for verifying linkage and integration",
          modificationLog: "Log of proposed modification notes"
        }
      },
      statAnalysis: {
        title: "Statistical Performance Analysis",
        description: "Manual data entry or import from Excel, utilize statistical analysis tools, and extract tables and charts.",
        contents: {
          dataEntry: "Manual data entry or import from Excel",
          analysisTools: "Statistical analysis tools (e.g., mean, variance)",
          extractChartsTables: "Extract tables and charts"
        }
      },
      deviations: {
        title: "Deviation Reports and Corrective Actions",
        description: "Identify deviations from goals, perform root cause analysis, and propose corrective actions linked to indicators.",
        contents: {
          deviationDetection: "Detection of deviations from goals",
          rootCauseAnalysis: "Root cause analysis of deviation",
          correctiveActions: "Propose corrective actions linked to indicators"
        }
      },
      approval: {
        title: "Results Approval and Recommendations",
        description: "Approve results and submit recommendations.",
        contents: {
          submitRecommendations: "Submit approved recommendations",
          managementFeedback: "Management comments and responses"
        }
      },
      reformulation: {
        title: "Strategy Reformulation and Update",
        description: "Review plan items based on results, consider proposals to modify vision or goals, and compare modified plan with the previous version.",
        contents: {
          reviewPlanItems: "Review plan items based on results",
          modificationProposals: "Proposals to modify vision or goals",
          comparePlans: "Compare modified plan with previous"
        }
      },
      sustainability: {
        title: "Sustainability Renewal",
        description: "Upload the modified plan, set a new timeline, and activate a new 5-year plan cycle.",
        contents: {
          uploadModifiedPlan: "Upload the modified plan",
          newTimeline: "Set a new timeline",
          activateNewCycle: "Activate a new 5-year plan cycle"
        }
      }
    },

    committee: {
      title: 'Committees and Meetings',
      description: 'Committees, teams details and meetings',
      addCommittee: 'Add Committee',
      pageDescription: 'Committees and Meetings',
      pageTitle: 'Committees and Meetings',
      searchPlaceholder: 'Search Committees',
      actionsHeader: 'Actions',
      membersCountHeader: 'Members Count',
      nameHeader: 'Name',
      statusHeader: 'Status',
      typeHeader: 'Type',
      menuMainTitle: 'Committees and Meetings',
      menu: {
        mainTitle: 'Committees and Meetings',
        allCommittees: 'All Committees',
        upcomingMeetings: 'Upcoming Meetings',
        actionItems: 'Action Items Tracker',
        attendanceOverview: 'Attendance Overview',
        documentsRepository: 'Documents Repository',
        dashboard: 'Dashboard',
        list: 'Committees List',
        assignments : 'Add Assignment',
        feedback : 'Add Feedback'  
      },
      committeeName: 'Committee Name',
      committeeRole: 'Committee Role',
      committees: 'Committees',
      committeeTypeHeader: 'Committee Type',
      statusHeader: 'Status',
      membersCountHeader: 'Members Count',
      list: {
        name: 'اسم اللجنة',
        chair: 'رئيس اللجنة',
        members: 'أعضاء اللجنة',
      },
    },

    training: {
      title: 'Training',
      description: 'Access training materials and resources',
      trainingContent: 'Training Content',
      targetAudience: 'Target Audience',
      numberOfTrainees: 'Number of Trainees',
      trainingType: 'Training Type',
      startDate: 'Start Date',
      endDate: 'End Date',
      location: 'Location',
      trainer: 'Trainer',
      trainingHours: 'Training Hours',
      addTraining: 'Add Training'
    }
  },
  ar: {
    committee: {
      assignments: {
        title: 'تعيينات اللجنة',
        committee: 'اللجنة',
        task: 'المهمة',
        due: 'تاريخ الاستحقاق',
        add: 'إضافة تعيين',
      },
      details: {
        tabs: {
          overview: 'نظرة عامة',
          members: 'الأعضاء',
          meetings: 'الاجتماعات',
          documents: 'الوثائق',
        },
      },
      meetings: {
        title: 'الاجتماعات',
        schedule: 'جدولة اجتماع',
        updated: 'تم تحديث الاجتماع.',
        scheduled: 'تمت جدولة الاجتماع.',
      },
      feedback: {
        title: 'ملاحظات اللجنة',
        enter: 'أدخل الملاحظة...',
        send: 'إرسال',
      },
      validation: {
        allFieldsRequired: 'جميع الحقول مطلوبة.',
      },
    },
    meeting: {
      details: {
        title: 'تفاصيل الاجتماع (المعرف: {{id}})',
        tabs: {
          agenda: 'جدول الأعمال',
          minutes: 'المحاضر والقرارات',
          attendance: 'الحضور',
          tasks: 'المهام / المتابعات',
          documents: 'الوثائق',
          link: 'رابط الاجتماع / التقويم',
        },
      },
    },
    committee: {
      deprecated: {
        title: 'تم إيقاف هذا القسم من اللجان.',
        body: 'يرجى استخدام لوحة تحكم اللجان الرئيسية ومسارات إضافة لجنة لإدارة جميع اللجان. (إذا ظهرت لك هذه الرسالة، قم بتحديث القائمة الجانبية لاستخدام لوحة التحكم الجديدة وواجهة النوافذ المنبثقة.)',
      },
    },
    documents: {
      title: 'مستودع الوثائق',
      table: {
        committee: 'اللجنة',
        meeting: 'الاجتماع',
        document: 'المستند',
        type: 'النوع',
      },
    },
    actionItems: {
      title: 'متابعة عناصر العمل',
      filter: {
        allCommittees: 'كل اللجان',
        allStatuses: 'كل الحالات',
        open: 'مفتوح',
        done: 'منجز',
      },
      table: {
        committee: 'اللجنة',
        meeting: 'الاجتماع',
        action: 'العنصر',
        status: 'الحالة',
      },
      status: {
        open: 'مفتوح',
        done: 'منجز',
      },
    },
    attendance: {
      title: 'نظرة عامة على الحضور',
      table: {
        committee: 'اللجنة',
        meeting: 'الاجتماع',
        present: 'حاضر',
        absent: 'غائب',
      },
    },
    meeting: {
      upcoming: 'الاجتماعات القادمة',
      table: {
        committee: 'اللجنة',
        title: 'العنوان',
        date: 'التاريخ',
        status: 'الحالة',
      },
      status: {
        upcoming: 'قادمة',
      },
    },
    appTitle: 'التخطيط الاستراتيجي',

    help: 'مساعدة',
    notifications: 'الإشعارات',
    noNewNotifications: 'لا توجد إشعارات جديدة',
    settings: 'الإعدادات',
    changeLanguage: 'تغيير اللغة',
    logout: 'تسجيل الخروج',
    addTag: 'إضافة وسم',

    selectProject: 'اختر المشروع',
    projectData: 'بيانات المشروع',
    newProject: 'مشروع جديد',
    editProject: 'تعديل المشروع',
    createProject: 'إنشاء مشروع',
    startDate: 'تاريخ البدء',
    endDate: 'تاريخ الانتهاء',
    progress: 'التقدم',
    targetDate: 'تاريخ الهدف',
    budget: 'الميزانية',
    impact: 'التأثير',
    category: 'الفئة',

    update: 'تحديث',
    add: 'إضافة',
    delete: 'حذف',
    edit: 'تعديل',
    save: 'حفظ',
    cancel: 'إلغاء',

    // Organization & Permissions
    organizationPermissions: {
      title: 'صلاحيات المنظمة',
      orgChartTitle: 'شجرة المنظمة',
      orgChart: {
        addUnit: 'إضافة وحدة',
        editUnit: 'تعديل الوحدة',
        deleteUnit: 'حذف الوحدة',
        moveUnit: 'نقل الوحدة',
        selectTarget: 'اختر الهدف',
        unitName: 'اسم الوحدة',
        addSubunit: 'إضافة وحدة فرعية',
        newUnitName: 'اسم الوحدة الجديدة'
      },
      permissionsTree: {
        addPermission: 'إضافة صلاحية',
        addTask: 'إضافة مهمة',
        addProcedure: 'إضافة إجراء',
        addForm: 'إضافة نموذج',
        edit: 'تعديل',
        delete: 'حذف',
        save: 'حفظ',
        cancel: 'إلغاء',
        namePlaceholder: 'أدخل الاسم...'
      },
      regulations: {
        add: 'إضافة لائحة',
        edit: 'تعديل',
        delete: 'حذف',
        save: 'حفظ',
        cancel: 'إلغاء',
        upload: 'رفع ملف',
        regulationName: 'اسم اللائحة'
      }
    },
    back: 'رجوع',
    next: 'التالي',
    submit: 'إرسال',
    confirm: 'تأكيد',
    status: 'الحالة',
    type: 'النوع',

    name: 'الاسم',
    mobile: 'الجوال',
    email: 'البريد الإلكتروني',
    organization: 'المنظمة',
    externalOrganization: 'منظمة خارجية',
    department: 'القسم',
    role: 'الدور',
    jobTitle: 'المسمى الوظيفي',
    nameHeader: 'الاسم',
    descriptionHeader: 'الوصف',
    stakeholders: 'أصحاب المصلحة',
    notes: 'ملاحظات',
    actions: 'إجراءات',
    priority: 'الأولوية',
    impact: 'التأثير',

    title: 'العنوان',
    description: 'الوصف',

    tags: 'الوسوم',
    addTag: 'إضافة وسم',
    comingSoon: 'قريباً...',
    enterDetails: 'أدخل التفاصيل هنا...',
    enterDescription: 'أدخل الوصف هنا...',
    enterTitle: 'أدخل العنوان هنا...',

    basicInfo: {
      title: 'المعلومات الأساسية',
      description: 'إدارة المعلومات الأساسية للمشروع',
      projectName: 'اسم المشروع',
      responsiblePerson: 'الشخص المسؤول',
      organizationName: 'اسم المنظمة',
      documents: 'المستندات',
      planningTeam: 'فريق التخطيط',
      monitoring: 'المتابعة',
      saveAndExit: 'حفظ والخروج',
      confirmationMessage: 'هل أنت متأكد أنك تريد إرسال هذا المشروع؟',
      name: 'الاسم',
      organization: 'المنظمة',
      relation: 'العلاقة',
      contactInfo: 'معلومات التواصل',
      target: 'الهدف',
      source: 'المصدر',
      addStakeholder: 'إضافة صاحب مصلحة',
      endDate: 'تاريخ الانتهاء',
      expectedOutcomes: 'النتائج المتوقعة',
      location: 'الموقع',
      mainTopics: 'الموضوعات الرئيسية',
      numberOfTrainees: 'عدد المتدربين',
      targetAudience: 'الجمهور المستهدف',
      trainer: 'المدرب',
      Content: 'محتوى التدريب',
      trainingHours: 'ساعات التدريب',
      trainingType: 'نوع التدريب',
      addIndicator: 'إضافة مؤشر',
      generalNotes: 'ملاحظات عامة',
      performanceIndicators: 'مؤشرات الأداء',
      startDate: 'تاريخ البدء',
      addMember: 'إضافة عضو',
      committeeName: 'اسم اللجنة',
      committeeRole: 'دور اللجنة',
      department: 'القسم',
      externalOrganization: 'منظمة خارجية',
      membershipStart: 'بدء العضوية',
      planningTeam: 'فريق التخطيط',
      upLoadFile: 'رفع ملف',
      selectStakeholders: 'اختر أصحاب المصلحة',
      committees: 'اللجان',
      confirmationTitle: 'عنوان التأكيد',
      documentsTitle: 'عنوان المستندات',
      evaluationTitle: 'عنوان التقييم',
      planningTeamTitle: 'عنوان فريق التخطيط',
      externalTeam: 'الفريق الخارجي',
      internalTeam: 'الفريق الداخلي',
      projectObjectives: 'أهداف المشروع',
      relatedProjects: 'المشاريع ذات الصلة',
      selectProject: 'اختر مشروعاً',
      frequency: 'التكرار',
      contactInfo: 'معلومات التواصل'
    },

    evaluation: {
      title: 'التقييم',
      description: 'تقييم أداء المشروع',
      addKpi: 'إضافة مؤشر أداء',
      addRisk: 'إضافة خطر',
      contingency: 'الطوارئ',
      keyPerformanceIndicators: 'مؤشرات الأداء الرئيسية',
      kpiName: 'اسم مؤشر الأداء',
      kpiDescription: 'وصف مؤشر الأداء',
      mitigation: 'التخفيف',
      monitoring: 'المتابعة',
      objectives: 'الأهداف',
      owner: 'المالك',
      probability: 'الاحتمالية',
      projectObjectives: 'أهداف المشروع',
      responsibleParty: 'الجهة المسؤولة',
      riskAssessment: 'تقييم المخاطر',
      riskDescription: 'وصف الخطر',
      targetValue: 'القيمة المستهدفة',
      unit: 'الوحدة',
      objectives: 'الأهداف',
      projectObjectives: 'أهداف المشروع',
      frequency: 'التكرار',
      impact: 'التأثير',
      successCriteria: 'معايير النجاح'
    },

    strategicAnalysis: {
      title: 'التحليل الاستراتيجي',
      description: 'تحليل العوامل الداخلية والخارجية المؤثرة على منظمتك',
      pageTitle: 'التحليل الاستراتيجي',
      pageDescription: 'تحليل العوامل الداخلية والخارجية المؤثرة على منظمتك',

      menu: {
        foundation: 'الأساس الاستراتيجي',
        foundationDesc: 'حدد العناصر الأساسية لخطتك الاستراتيجية',
        mandates: 'التفويضات والمسؤوليات',
        mandatesDesc: 'توثيق التفويضات الرسمية وغير الرسمية',
        mission: 'بيان المهمة',
        missionDesc: 'حدد وصياغة بيان المهمة',
        external: 'البيئة الخارجية',
        externalDesc: 'تحليل القوى والاتجاهات واحتياجات أصحاب المصلحة',
        internal: 'البيئة الداخلية',
        internalDesc: 'مراجعة الأهداف والموارد والأداء',
        analysis: 'تحليل البيانات',
        analysisDesc: 'تحليل SWOT وصياغة المصفوفة',
        reengineering: 'إعادة هندسة الأعمال',
        reengineeringDesc: 'بناء جدول بيانات للوصف ورفع المرفقات، مرتبط بجدول الحوكمة كما يلي: \n1- الهيكل التنظيمي: حقول هرمية مرنة للمستويات (المستوى 1، 2، 3، إلخ)، مع تسجيل اسم القسم أو الوحدة حسب الحاجة لكل مستوى.\n2- الصلاحيات: حقول نصية مرتبطة بكل مستوى لتسجيل الصلاحيات، مرنة لأي عدد.\n3- المهام: حقول نصية مرتبطة بكل صلاحية لتسجيل المهام، مرنة لأي عدد.\n4- الإجراءات: حقول نصية مرتبطة بكل مهمة لتسجيل الإجراءات، مرنة لأي عدد.\n5- اللوائح والسياسات: حقول لأسماء اللوائح أو السياسات حسب النوع، مع إمكانية رفع المرفقات.'
      },

      foundation: {
        title: 'الأساس الاستراتيجي',
        description: 'حدد العناصر الأساسية لخطتك الاستراتيجية',
        subtitle: 'حدد العناصر الأساسية لخطتك الاستراتيجية',
        principles: 'المبادئ والقيم',
        principlesDesc: 'حدد المبادئ والقيم الأساسية التي توجه منظمتك',
        currentState: 'الحالة الحالية',
        currentStateDesc: 'قيم الوضع الحالي وقدرات منظمتك',
        stakeholders: 'أصحاب المصلحة',
        stakeholdersDesc: 'حدد وحلل أصحاب المصلحة الرئيسيين واحتياجاتهم',
        performance: 'مؤشرات الأداء',
        performanceDesc: 'حدد مؤشرات الأداء الرئيسية والمقاييس',
        addPrinciple: 'إضافة مبدأ',
        editPrinciple: 'تعديل المبدأ',
        deletePrinciple: 'حذف المبدأ',
        principleTitle: 'العنوان',
        principleDesc: 'الوصف',
        principleType: 'النوع',
        principleValue: 'القيمة',
        principlePriority: 'الأولوية',
        principleStatus: 'الحالة',
        principleNotes: 'ملاحظات',
        responsibleTeam: 'الفريق المسؤول',
        priority: 'الأولوية',
        status: 'الحالة',
        principleTypes: {
          core: 'أساسي',
          operational: 'تشغيلي',
          strategic: 'استراتيجي'
        },
        principlePriorityLevels: {
          high: 'عالي',
          medium: 'متوسط',
          low: 'منخفض'
        },
        principleStatusTypes: {
          active: 'نشط',
          draft: 'مسودة',
          archived: 'مؤرشف'
        },
      },
      purposeAndPhilosophy: {
        title: 'الغرض والفلسفة',
        description: 'وصف الغرض والفلسفة والهوية والوظيفة',
        purpose: 'الغرض',
        philosophy: 'الفلسفة',
        identity: 'الهوية',
        identityDescription: 'وصف الهوية',
        identityHelperText: 'صف هوية المنظمة وقيمها الأساسية',
        function: 'الوظيفة',
        functionDescription: 'وصف الوظيفة',
        functionHelperText: 'صف الوظائف الرئيسية للمنظمة'
      },

      mandates: {
        title: 'التفويضات والمسؤوليات',
        description: 'توثيق التفويضات الرسمية وغير الرسمية',
        formalMandates: 'التفويضات الرسمية',
        formalMandatesDesc: 'سرد التفويضات واللوائح الرسمية',
        informalMandates: 'التفويضات غير الرسمية',
        informalMandatesDesc: 'تسجيل التوقعات والأعراف غير الرسمية',
        responsibilities: 'المسؤوليات الأساسية',
        responsibilitiesDesc: 'حدد الواجبات التنظيمية الرئيسية',
        newMandate: 'تفويض جديد',
        newResponsibility: 'مسؤولية جديدة',
        addNewMandate: 'إضافة تفويض جديد',
        addNewResponsibility: 'إضافة مسؤولية جديدة',
      },

      mission: {
        title: 'بيان المهمة',
        description: 'حدد وصياغة بيان المهمة',
        subtitle: 'حدد وصياغة بيان المهمة',
        suggestedTitle: 'بيانات المهمة المقترحة من الذكاء الاصطناعي',
        suggestedDesc: 'بيانات المهمة المقترحة من الذكاء الاصطناعي بناءً على مدخلاتك',
        editableTitle: 'مسودة العمل',
        editableDesc: 'عدل وصقل بيان المهمة الخاص بك',
        finalTitle: 'بيان المهمة النهائي',
        finalDesc: 'بيان المهمة المعتمد الخاص بك',
        generateButton: 'إنشاء اقتراحات',
        copyToEditable: 'استخدام كمسودة',
        copyToFinal: 'اعتماد البيان',
        noSuggestions: 'لا توجد اقتراحات حتى الآن. انقر فوق "إنشاء" للحصول على اقتراحات الذكاء الاصطناعي.',
        noStatement: 'لا يوجد بيان مهمة معتمد حتى الآن.',
        placeholder: 'أدخل بيان المهمة...'
      },
      external: {
        title: 'البيئة الخارجية',
        description: 'تحليل القوى والاتجاهات واحتياجات أصحاب المصلحة',
        pestAnalysis: 'تحليل PEST',
        political: 'العوامل السياسية',
        politicalDesc: 'تحليل التأثيرات السياسية والتنظيمية',
        economic: 'العوامل الاقتصادية',
        economicDesc: 'تحليل العوامل الاقتصادية والمالية',
        social: 'العوامل الاجتماعية',
        socialDesc: 'تحليل الاتجاهات الاجتماعية والثقافية',
        technological: 'العوامل التكنولوجية',
        technologicalDesc: 'تحليل التطورات التكنولوجية',
        stakeholderAnalysis: 'تحليل أصحاب المصلحة',
        beneficiaries: 'المستفيدون',
        beneficiariesDesc: 'تحليل احتياجات وتوقعات المستفيدين',
        funders: 'الممولون',
        fundersDesc: 'تحليل متطلبات وتوقعات الممولين',
        opportunities: 'الفرص',
        threats: 'التهديدات'
      },
      internal: {
        title: 'البيئة الداخلية',
        description: 'مراجعة الأهداف والموارد والأداء',
        subtitle: 'مراجعة الأهداف والموارد والأداء',
        objectives: 'الأهداف',
        objectivesDesc: 'مراجعة الأهداف الحالية',
        services: 'الخدمات',
        servicesDesc: 'تقييم الخدمات والبرامج',
        culture: 'الثقافة التنظيمية',
        cultureDesc: 'تحليل القيم والممارسات',
        resources: 'الموارد',
        resourcesDesc: 'تقييم الموارد المتاحة',
        financial: 'الموارد المالية',
        human: 'الموارد البشرية',
        performance: 'الأداء',
        performanceDesc: 'تقييم مقاييس الأداء',
        strengths: 'نقاط القوة',
        weaknesses: 'نقاط الضعف',
        rating: 'التقييم',
      },
      analysis: {
        title: 'تحليل البيانات',
        description: 'تحليل SWOT وصياغة المصفوفة',
        subtitle: 'تحليل SWOT وصياغة المصفوفة',
        swotTitle: 'مصفوفة SWOT',
        swotDesc: 'تحليل نقاط القوة والضعف والفرص والتهديدات',
        strengths: 'نقاط القوة',
        weaknesses: 'نقاط الضعف',
        opportunities: 'الفرص',
        threats: 'التهديدات',
        add: 'إضافة عنصر',
        strategicIssues: 'القضايا الاستراتيجية',
        issuesDesc: 'التحديات والفرص الرئيسية',
        itemPlaceholder: 'عنصر نائب',
        matrixDesc: 'وصف المصفوفة',
        matrixPlaceholder: 'عنصر نائب للمصفوفة',
        matrixTitle: 'عنوان المصفوفة'
      }
    },

    strategyFormulation: {
      title: 'صياغة الاستراتيجية',
      description: 'تطوير الأهداف الاستراتيجية وخطط العمل',
      pageTitle: 'صياغة الاستراتيجية',
      pageDescription: 'تطوير الأهداف الاستراتيجية وخطط العمل',
      menu: {
        initialView: 'النظرة الأولية والاتجاهات الاستراتيجية',
        visionChallenges: 'الرؤية والتحديات',
        strategicIssues: 'القضايا الاستراتيجية',
        goalsObjectives: 'صياغة الأهداف والغايات',
        objectivesProjects: 'نشر الأهداف والمشاريع',
        coordination: 'التنسيق والتكامل',
        executivePlans: 'الخطط التنفيذية والميزانيات'
      },
      initialView: {
        title: 'النظرة الأولية والاتجاهات الاستراتيجية',
        subtitle: 'النظرة الأولية والاتجاهات الاستراتيجية',
        items: {
          leadershipExpectations: 'تحديد توقعات القيادة والاتجاهات التنظيمية',
          employeeExpectations: 'توقعات الموظفين',
          stakeholderRequirements: 'تحديد متطلبات المستفيدين (العملاء، الموظفين، المجتمع...)',
          nationalDevelopment: 'مراقبة اتجاهات خطة التنمية الوطنية',
          globalTrends: 'دراسة الاتجاهات العالمية واستشراف المستقبل',
        }
      },
      visionChallenges: {
        title: 'الرؤية والتحديات',
        subtitle: 'الرؤية والتحديات',
        items: {
          visionElements: 'الاتفاق على وصياغة عناصر الرؤية',
          challengesMatrix: 'وصف مصفوفة التحديات التي تواجه المنظمة',
          successIndicators: 'تحديد مؤشرات نجاح الرؤية',
          realityGap: 'تحديد الفجوة بين الواقع والرؤية',
          actions: 'الإجراءات',
          priority: 'الأولوية',
          impact: 'التأثير'
        },
      },
      strategicIssues: {
        title: 'القضايا الاستراتيجية',
        subtitle: 'القضايا الاستراتيجية',
        items: {
          issuesList: 'إعداد قائمة بالقضايا الاستراتيجية',
          keyFactors: 'تحديد العوامل التي تجعل كل قضية استراتيجية أساسية',
          failureConsequences: 'تحديد عواقب الفشل لكل قضية',
          issuesDescription: 'وصف واعتماد القضايا الاستراتيجية',
          prioritization: 'جدولة القضايا حسب الأولوية',
          enterDescription: 'أدخل الوصف',
          enterTitle: 'أدخل العنوان',
          implications: 'الآثار',
          opportunities: 'الفرص',
          priorities: 'الأولوية'
        },
      },
      goalsObjectives: {
        title: 'صياغة الأهداف والغايات',
        subtitle: 'تفصيل صياغة الأهداف والغايات',
        objective: 'الهدف',
        items: {
          strategicGoals: 'صياغة الأهداف الاستراتيجية',
          objectivesFormulation: 'صياغة الأهداف الاستراتيجية لكل غاية',
          strategySelection: 'وصف واختيار الاستراتيجية وتقييم البدائل',
          obstaclesAndAlternatives: 'تحديد العقوبات وعرض حلول بديلة',
          strategyReview: 'مراجعة الاستراتيجية المختارة وربطها بالرؤية والأهداف',
          objectivesGoals: 'الأهداف والغايات',
          performanceIndicators: 'مؤشرات الأداء',
          timeline: 'جدول زمني',
          objectivesList: 'قائمة الأهداف'
        }
      },
      objectivesProjects: {
        title: 'نشر الأهداف والمشاريع',
        subtitle: 'نشر الأهداف والمشاريع',
        items: {
          objectivesDistribution: 'توزيع الأهداف الاستراتيجية على الأقسام',
          projectsPrograms: 'بناء المشاريع والبرامج لكل هدف حسب القسم',
          requirements: 'تحديد المتطلبات المالية والإدارية للتنفيذ',
          documentation: 'توثيق المشاريع والبرامج',
          addStakeholder: 'إضافة صاحب مصلحة',
          stakeholders: 'أصحاب المصلحة'
        },
      },
      coordination: {
        title: 'التنسيق والتكامل',
        subtitle: 'التنسيق والتكامل',
        items: {
          internalCoordination: 'التنسيق بين المشاريع والبرامج داخلياً',
          externalCoordination: 'التنسيق مع الكيانات الخارجية',
          objectivesMatrix: 'رسم مصفوفة الأهداف مع استراتيجيات التنفيذ',
          plansMatrix: 'رسم مصفوفة الخطط والبرامج مع الكيانات المنفذة'
        }
      },
      executivePlans: {
        title: 'الخطط التنفيذية والميزانيات',
        subtitle: 'الخطط التنفيذية والميزانيات',
        items: {
          description: 'تطوير الخطط التنفيذية والميزانيات',
          contents: 'المحتويات:',
          planningProcess: 'عملية التخطيط',
          budgetAllocation: 'تخصيص الميزانية',
          timeframes: 'الإطار الزمني',
          responsibilities: 'المسؤوليات',
          dateRange: 'النطاق الزمني',
          responsible: 'المسؤول'
        }
      }
    },

    execution: {
      title: 'التنفيذ',
      subtitle: 'التنفيذ',
      items: {
        description: 'تنفيذ خطة الاستراتيجية',
        executivePlans: 'الخطط التنفيذية والميزانيات',
        projectsStatus: 'حالة المشاريع',
        projectsLink: 'ربط كل مشروع بالأهداف الاستراتيجية',
        feedbackAlerts: 'تنبيهات التعليقات',
        communicationBoard: 'لوحة الاتصالات',
        supportPrograms: 'برامج الدعم',
        roadmapFilter: 'تصفية خارطة الطريق',
      },
      menu: {
        mainTitle: 'قائمة المتابعة', // عنوان عام لهذه الكتلة من القائمة، إذا لزم الأمر
        setup: 'الإعداد',
        communication: 'الاتصالات',
        roadmap: 'خارطة الطريق',
        resources: 'الموارد',
        feedback: 'التعليقات',
        projects: 'المشاريع',
        support: 'الدعم والتحديات',
        alignment: 'الربط الديناميكي'
      },
      roadmap: {
        title: 'دليل التنفيذ وخارطة الطريق',
        description: 'تصميم دليل تنفيذ واضح.',
        contents: 'المحتويات:',
        table: 'جدول زمني تفاعلي.',
        taskBox: 'مربعات المهام (المهمة، الوقت، السبب، المالك، الطريقة).',
        filter: 'تصفية حسب المالك أو المرحلة.'
      },
      resources: {
        title: 'إدارة الموارد والدعم',
        description: 'توفير الدعم البشري والإداري لـ ',
        contents: 'المحتويات:',
        staff: 'سجل الدعم الإداري/الموظفين.',
        req: 'نموذج طلب الموارد.',
        track: 'تتبع وتعيين الموارد.',
        integration: 'التكامل مع الموارد البشرية إذا كانت متاحة.'
      },
      feedback: {
        title: 'البيانات والتعليقات',
        description: 'تصميم شبكات التعليقات وتحديث البيانات.',
        contents: 'المحتويات:',
        input: 'إدخال بيانات التقدم.',
        chart: 'مخطط التحديثات/الملاحظات.',
        reports: 'تقارير التعليقات الدورية.',
        alerts: 'تنبيهات تلقائية للتأخيرات.'
      },
      projects: {
        title: 'تنفيذ المشاريع والمبادرات',
        description: 'تطبيق خطط التنفيذ حسب الجدول والمستوى.',
        contents: 'المحتويات:',
        gantt: 'مخطط جانت للمهام/المشاريع.',
        groups: 'مجموعات تغيير المبادرات.',
        status: 'حالة المشروع (قيد التنفيذ، متأخر، مكتمل...).',
        link: 'ربط كل مشروع بالأهداف الاستراتيجية.'
      },
      support: {
        title: 'الدعم الميداني والتحديات',
        description: 'تحديد وإدارة التحديات الميدانية.',
        contents: 'المحتويات:',
        log: 'سجل ميداني (زيارة، ملاحظة، تحدي).',
        resistance: 'تحليل مقاومة التغيير.',
        programs: 'مصفوفة برامج التغيير.'
      },
      alignment: {
        title: 'الربط الديناميكي: الخطة والواقع',
        description: 'إعادة ربط المبادرات مع العمليات.',
        contents: 'المحتويات:',
        compare: 'مقارنة أهداف المبادرات والنتائج الفعلية.',
        board: 'لوحة الربط',
        compare: 'مقارنة الربط',
        contents: 'محتويات الربط',
        desc: 'وصف الربط',
        title: 'عنوان الربط',
        warnings: 'تحذيرات الربط'
      },
      communication: {
        title: 'الاتصالات',
        description: 'الوصف',
        contents: 'المحتويات:',
        board: 'اللوحة',
        channels: 'القنوات',
        contents: 'المحتويات',
        desc: 'الوصف',
        log: 'السجل',
        notifications: 'الإشعارات',
        publish: 'النشر',
        title: 'العنوان',
        upload: 'رفع'
      },

      setup: {
        Title: 'الإعداد',
        Assign: 'تعيين',
        Contents: 'المحتويات',
        Desc: 'الوصف',
        Doc: 'المستند',
        DocInput: 'إدخال المستند',
        Org: 'المنظمة',
        OrgChart: 'الهيكل التنظيمي',
        Schedule: 'الجدول',
        TeamsMatrix: 'مصفوفة الفرق'
      }
    },

    monitoring: {
      title: "العنوان",
      description: "مراقبة خطة الاستراتيجية ومتابعتها",
      menu: {
        mainTitle: "قائمة المتابعة",
        tools: "أدوات المتابعة",
        kpis: "مؤشرات الأداء",
        feedbackForms: "النماذج والتعليقات",
        planReview: "مراجعة الخطة",
        statAnalysis: "التحليل الإحصائي",
        deviations: "الانحرافات والإجراءات",
        approval: "اعتماد النتائج",
        reformulation: "تحديث الاستراتيجية",
        sustainability: "تجديد الاستدامة"
      },
      tools: {
        title: "أدوات المتابعة والتقييم",
        description: "وصف لأدوات المتابعة",
        contents: {
          monitoringTimeline: "تحديد الجداول الزمنية للمتابعة",
          uploadFiles: "رفع ملفات/نماذج التتبع (PDF، Excel...)"
        }
      },
      kpis: {
        title: "مؤشرات الأداء الرئيسية (KPIs)",
        description: "تحديد مؤشرات الأداء للأهداف، تعيين المسؤولية، تعيين القيم المستهدفة/الفعلية، والتتبع بالمخططات.",
        contents: {
          defineKpis: "تحديد مؤشرات الأداء للأهداف والغايات",
          assignResponsibility: "تعيين المسؤولية لكل مؤشر",
          targetActualValues: "القيم المستهدفة والفعلية",
          trackCharts: "مخططات لتتبع المؤشرات"
        }
      },
      feedbackForms: {
        title: "النماذج والتعليقات",
        description: "الوصول إلى نماذج المتابعة، رفع تقارير التعليقات من الأقسام، وعرض تقارير المقارنة.",
        contents: {
          monitoringForms: "نماذج المتابعة الجاهزة والقابلة للتخصيص",
          uploadFeedback: "رفع تقارير التعليقات من الأقسام",
          comparisonReports: "تقارير المقارنة بين المتوقع والمحقق"
        }
      },
      planReview: {
        title: "مراجعة الخطة والتكامل الداخلي",
        description: "التحقق من الربط والتكامل، ومراجعة سجلات التعديل.",
        contents: {
          verificationTools: "أدوات التحقق من الربط والتكامل",
          modificationLog: "سجل ملاحظات التعديل المقترحة"
        }
      },
      statAnalysis: {
        title: "التحليل الإحصائي للأداء",
        description: "إدخال البيانات يدوياً أو استيرادها من Excel، استخدام أدوات التحليل الإحصائي، واستخراج الجداول والمخططات.",
        contents: {
          dataEntry: "إدخال البيانات يدوياً أو استيرادها من Excel",
          analysisTools: "أدوات التحليل الإحصائي (مثل المتوسط، التباين)",
          extractChartsTables: "استخراج الجداول والمخططات"
        }
      },
      deviations: {
        title: "تقارير الانحرافات والإجراءات التصحيحية",
        description: "تحديد الانحرافات عن الأهداف، تحليل السبب الجذري، واقتراح إجراءات تصحيحية مرتبطة بالمؤشرات.",
        contents: {
          deviationDetection: "الكشف عن الانحرافات عن الأهداف",
          rootCauseAnalysis: "تحليل السبب الجذري للانحراف",
          correctiveActions: "اقتراح إجراءات تصحيحية مرتبطة بالمؤشرات"
        }
      },
      approval: {
        title: "اعتماد النتائج والتوصيات",
        description: "اعتماد النتائج وإرسال التوصيات.",
        contents: {
          submitRecommendations: "إرسال التوصيات المعتمدة",
          managementFeedback: "تعليقات وردود الإدارة"
        }
      },
      reformulation: {
        title: "إعادة صياغة وتحديث الاستراتيجية",
        description: "مراجعة بنود الخطة بناءً على النتائج، النظر في مقترحات تعديل الرؤية أو الأهداف، ومقارنة الخطة المعدلة مع النسخة السابقة.",
        contents: {
          reviewPlanItems: "مراجعة بنود الخطة بناءً على النتائج",
          modificationProposals: "مقترحات تعديل الرؤية أو الأهداف",
          comparePlans: "مقارنة الخطة المعدلة مع السابقة"
        }
      },
      sustainability: {
        title: "تجديد الاستدامة",
        description: "رفع الخطة المعدلة، تعيين إطار زمني جديد، وتفعيل دورة خطة جديدة لمدة 5 سنوات.",
        contents: {
          uploadModifiedPlan: "رفع الخطة المعدلة",
          newTimeline: "تعيين إطار زمني جديد",
          activateNewCycle: "تفعيل دورة خطة جديدة لمدة 5 سنوات"
        }
      }
    },

    committee: {
      title: 'اللجان والاجتماعات',
      description: 'تفاصيل اللجان والفرق والاجتماعات',
      addCommittee: 'إضافة لجنة',
      pageDescription: 'اللجان والاجتماعات',
      pageTitle: 'اللجان والاجتماعات',
      searchPlaceholder: 'بحث اللجان',
      actionsHeader: 'الإجراءات',
      membersCountHeader: 'عدد الأعضاء',
      nameHeader: 'الاسم',
      statusHeader: 'الحالة',
      typeHeader: 'النوع',
      menuMainTitle: 'اللجان والاجتماعات',
      menu: { 
        mainTitle: 'اللجان والاجتماعات',
        allCommittees: 'جميع اللجان',
        upcomingMeetings: 'الاجتماعات القادمة',
        actionItems: 'متابعة عناصر العمل',
        attendanceOverview: 'نظرة عامة على الحضور',
        documentsRepository: 'مستودع الوثائق',
        dashboard:  'قائمة اللجان',
        assignments : 'إضافة مهمة',
        feedback : 'إضافة تعليق'  
      },
      list: {
        name: 'اسم اللجنة',
        chair: 'رئيس اللجنة',
        members: 'أعضاء اللجنة',
      },
      committeeRole: 'دور اللجنة',
      committeeTypeHeader: 'نوع اللجنة'
    },

    training: {
      title: 'التدريب',
      description: 'الوصول إلى مواد التدريب والموارد',
      trainingContent: 'محتوى التدريب',
      targetAudience: 'الجمهور المستهدف',
      numberOfTrainees: 'عدد المتدربين',
      trainingType: 'نوع التدريب',
      startDate: 'تاريخ البدء',
      endDate: 'تاريخ الانتهاء',
      location: 'الموقع',
      trainer: 'المدرب',
      trainingHours: 'ساعات التدريب',
      addTraining: 'إضافة تدريب'
    }
  },
}