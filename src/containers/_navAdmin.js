export default [
    {
      _name: 'CSidebarNav',
      _children: [
        {
          _name: 'CSidebarNavItem',
          name: 'Dashboard',
          to: '/dashboard',
          icon: 'cil-speedometer',
          badge: {
            color: 'primary',
            text: 'NEW'
          }
        },
        {
          _name: 'CSidebarNavTitle',
          _children: ['Menu']
        },
        {
          _name: 'CSidebarNavItem',
          name: 'User Management',
          to: '/users',
          icon: 'cil-pencil'
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Senior Score',
          to: '/seniorScore',
          icon: 'cil-pencil'
        }
      ]
    }
  ]