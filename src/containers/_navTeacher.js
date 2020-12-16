export default [
    {
      _name: 'CSidebarNav',
      _children: [
        {
          _name: 'CSidebarNavItem',
          name: 'Dashboard',
          to: '/dashboard',
          icon: 'cil-speedometer',
          /*badge: {
            color: 'primary',
            text: 'NEW'
          }*/
        },
        {
          _name: 'CSidebarNavTitle',
          _children: ['Menu']
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Senior Projects Store',
          to: '/menu/seniorProjectStore',
          icon: 'cil-pencil'
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Upload Project',
          to: '/menu/uploadProject',
          icon: 'cil-cursor'
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Project Store (Advisor)',
          to: '/menu/projectCheckingSystem/',
          icon: 'cil-chart-pie'
        },
        {
          _name: 'CSidebarNavItem',
          name: 'About Us',
          to: '/menu/aboutUs',
          icon: 'cil-file'
        }
      ]
    }
  ]