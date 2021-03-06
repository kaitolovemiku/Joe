export default [
    {
      _name: 'CSidebarNav',
      _children: [
        {
          _name: 'CSidebarNavItem',
          name: 'Dashboard',
          to: '/dashboard',
          icon: 'cil-speedometer',
          // badge: {
          //   color: 'primary',
          //   text: 'NEW'
          // }
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
          name: 'Upload Senior Project',
          to: '/menu/uploadProject',
          icon: 'cil-cursor'
        },
        {
          _name: 'CSidebarNavItem',
          name: 'My Project',
          to: '/menu/myProject/',
          icon: 'cil-puzzle'
        }
      ]
    }
  ]