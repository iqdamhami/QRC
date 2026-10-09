/**
 * قاعدة بيانات محلية باستخدام localStorage
 * مركز الملكة رانيا للدراسات الأردنية وخدمة المجتمع
 */

const DB_KEY = 'qrc_center_db';

const DEFAULT_COURSES = [
  {
    id: 1,
    title: 'دبلوم تدريبي في فنون الطهي',
    description: 'تدريب على مهارات الطهي الأساسية والمتقدمة وتمكين المشاركين من العمل في مجال الضيافة. تدريب عملي ونظري مع كادر مؤهل.',
    duration: '9 أشهر',
    hours: '360 ساعة',
    fees: '1000 دينار أردني',
    category: 'دبلوم',
    certificate: 'شهادة معتمدة من جامعة اليرموك ووزارة التعليم العالي'
  },
  {
    id: 2,
    title: 'دبلوم مهني في إدارة المستشفيات والخدمة الصحية',
    description: 'تأهيل في إدارة المستشفيات والخدمات الصحية مع تدريب ميداني متخصص في القطاعين العام والخاص.',
    duration: 'حوالي 10 أشهر',
    hours: '400 ساعة',
    fees: 'حسب الإعلان',
    category: 'دبلوم',
    certificate: 'شهادة معتمدة من جامعة اليرموك'
  },
  {
    id: 3,
    title: 'دبلوم مهني في إدارة السجلات والسكرتاريا الطبية',
    description: 'تدريب متخصص في إدارة السجلات الطبية والسكرتاريا الطبية لتلبية احتياجات سوق العمل في القطاع الصحي.',
    duration: 'حوالي 10 أشهر',
    hours: '400 ساعة',
    fees: 'حسب الإعلان',
    category: 'دبلوم',
    certificate: 'شهادة معتمدة من جامعة اليرموك'
  },
  {
    id: 4,
    title: 'دبلوم مهني في إدارة المساحة ومراقبة الأبنية',
    description: 'مهارات عملية ونظرية في المساحة ومراقبة الأبنية مع تدريب ميداني.',
    duration: 'حوالي 10 أشهر',
    hours: '400 ساعة',
    fees: 'حسب الإعلان',
    category: 'دبلوم',
    certificate: 'شهادة معتمدة من جامعة اليرموك'
  },
  {
    id: 5,
    title: 'دبلوم مهني في المحاسبة الإلكترونية',
    description: 'تأهيل في المحاسبة الإلكترونية وأنظمتها الحديثة لتلبية متطلبات سوق العمل.',
    duration: 'حوالي 10 أشهر',
    hours: '400 ساعة',
    fees: 'حسب الإعلان',
    category: 'دبلوم',
    certificate: 'شهادة معتمدة من جامعة اليرموك'
  },
  {
    id: 6,
    title: 'دبلوم صيانة أجهزة الحاسوب وإدارة الأنظمة والشبكات وأمنها',
    description: 'تدريب عملي على صيانة الحاسوب وإدارة الشبكات وأمن المعلومات.',
    duration: 'حوالي 10 أشهر',
    hours: '400 ساعة',
    fees: 'حسب الإعلان',
    category: 'دبلوم',
    certificate: 'شهادة معتمدة من جامعة اليرموك'
  },
  {
    id: 7,
    title: 'دبلوم الإعلام الرقمي التلفزيوني',
    description: 'مهارات الإعلام الرقمي والإنتاج التلفزيوني مع تدريب عملي.',
    duration: 'حوالي 10 أشهر',
    hours: '400 ساعة',
    fees: 'حسب الإعلان',
    category: 'دبلوم',
    certificate: 'شهادة معتمدة من جامعة اليرموك'
  },
  {
    id: 8,
    title: 'دبلوم تكنولوجيا حفر الآبار',
    description: 'برنامج احترافي في تقنيات الحفر وهندسة السوائل مع تدريب ميداني حقيقي في قطاع النفط والمياه.',
    duration: '9 أشهر',
    hours: '300 ساعة',
    fees: '1500 دينار أردني (خصومات متاحة)',
    category: 'دبلوم',
    certificate: 'شهادة معتمدة من جامعة اليرموك ومصدقة رسمياً'
  },
  {
    id: 9,
    title: 'دورة التحليل الإحصائي SPSS',
    description: 'تعزيز كفاءات التحليل الإحصائي باستخدام برنامج SPSS للموظفين والمجتمع المحلي.',
    duration: 'حسب الإعلان',
    hours: 'حسب الإعلان',
    fees: 'حسب الإعلان',
    category: 'دورة',
    certificate: 'شهادة مشاركة من المركز'
  },
  {
    id: 10,
    title: 'دورة لغة البرمجة بايثون',
    description: 'تعلم أساسيات ومتوسطات لغة بايثون للبرمجة وتطوير المهارات التقنية.',
    duration: 'حسب الإعلان',
    hours: 'حسب الإعلان',
    fees: 'حسب الإعلان',
    category: 'دورة',
    certificate: 'شهادة مشاركة من المركز'
  },
  {
    id: 11,
    title: 'دورة المحادثة والمهارات باللغة الإنجليزية',
    description: 'دورات محادثة ومهارات اللغة الإنجليزية بمستويات متعددة.',
    duration: 'حسب المستوى',
    hours: 'حسب المستوى',
    fees: 'حسب الإعلان',
    category: 'دورة',
    certificate: 'شهادة مشاركة من المركز'
  },
  {
    id: 12,
    title: 'دورة الإعداد لامتحان الرخصة الدولية لقيادة الحاسوب ICDL',
    description: 'تأهيل لاجتياز امتحان ICDL والحصول على الرخصة الدولية.',
    duration: 'حسب الإعلان',
    hours: 'حسب الإعلان',
    fees: 'حسب الإعلان',
    category: 'دورة',
    certificate: 'شهادة ICDL معتمدة'
  },
  {
    id: 13,
    title: 'دورة الروبوتيكس للأطفال',
    description: 'دورة تعليم البرمجة والروبوتات للأطفال لتنمية الإبداع والابتكار.',
    duration: 'حسب الإعلان',
    hours: 'حسب الإعلان',
    fees: 'حسب الإعلان',
    category: 'دورة',
    certificate: 'شهادة مشاركة من المركز'
  }
];

// Simple hash for passwords (not cryptographically strong, but fine for local demo)
function simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i);
    h |= 0;
  }
  return 'h' + Math.abs(h).toString(16) + '_' + str.length;
}

function getDB() {
  const raw = localStorage.getItem(DB_KEY);
  if (!raw) {
    const initial = {
      users: [
        {
          id: 1,
          full_name: 'مدير المركز',
          email: 'admin@qrc.yu.edu.jo',
          phone: '027211111',
          password: simpleHash('admin123'),
          role: 'admin',
          created_at: new Date().toISOString()
        }
      ],
      courses: DEFAULT_COURSES.slice(),
      inquiries: [],
      nextUserId: 2,
      nextInquiryId: 1,
      nextCourseId: 14,
      session: null
    };
    localStorage.setItem(DB_KEY, JSON.stringify(initial));
    return initial;
  }
  const data = JSON.parse(raw);
  // migrate older DBs that lack nextCourseId
  if (typeof data.nextCourseId !== 'number') {
    const maxId = (data.courses || []).reduce((m, c) => Math.max(m, c.id || 0), 0);
    data.nextCourseId = maxId + 1;
    saveDB(data);
  }
  return data;
}

function saveDB(data) {
  localStorage.setItem(DB_KEY, JSON.stringify(data));
}

const DB = {
  // Session
  getSession() {
    return getDB().session;
  },
  setSession(user) {
    const data = getDB();
    data.session = user ? { id: user.id, full_name: user.full_name, email: user.email, role: user.role } : null;
    saveDB(data);
  },
  logout() {
    this.setSession(null);
  },

  // Users
  getUserByEmail(email) {
    return getDB().users.find(u => u.email === email);
  },
  getUserById(id) {
    return getDB().users.find(u => u.id === Number(id));
  },
  register(full_name, email, phone, password) {
    const data = getDB();
    if (data.users.find(u => u.email === email)) {
      return { error: 'البريد الإلكتروني مسجل مسبقاً' };
    }
    if (password.length < 6) {
      return { error: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' };
    }
    const user = {
      id: data.nextUserId++,
      full_name,
      email,
      phone: phone || '',
      password: simpleHash(password),
      role: 'subscriber',
      created_at: new Date().toISOString()
    };
    data.users.push(user);
    saveDB(data);
    return { user };
  },
  login(email, password) {
    const user = this.getUserByEmail(email);
    if (!user || user.password !== simpleHash(password)) {
      return { error: 'البريد أو كلمة المرور غير صحيحة' };
    }
    this.setSession(user);
    return { user: { id: user.id, full_name: user.full_name, email: user.email, role: user.role } };
  },
  getSubscribers() {
    const data = getDB();
    return data.users
      .filter(u => u.role === 'subscriber')
      .map(u => ({
        id: u.id,
        full_name: u.full_name,
        email: u.email,
        phone: u.phone,
        created_at: u.created_at,
        inquiries_count: data.inquiries.filter(i => i.user_id === u.id).length
      }))
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  },
  deleteUser(id) {
    const data = getDB();
    const user = data.users.find(u => u.id === Number(id));
    if (!user || user.role === 'admin') return false;
    data.users = data.users.filter(u => u.id !== Number(id));
    data.inquiries = data.inquiries.filter(i => i.user_id !== Number(id));
    saveDB(data);
    return true;
  },
  changePassword(userId, currentPassword, newPassword) {
    const data = getDB();
    const user = data.users.find(u => u.id === Number(userId));
    if (!user) return { error: 'المستخدم غير موجود' };
    if (user.password !== simpleHash(currentPassword)) {
      return { error: 'كلمة المرور الحالية غير صحيحة' };
    }
    if (!newPassword || newPassword.length < 6) {
      return { error: 'كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل' };
    }
    user.password = simpleHash(newPassword);
    saveDB(data);
    return { success: true };
  },

  // Courses
  getCourses() {
    return getDB().courses;
  },
  getCourseById(id) {
    return getDB().courses.find(c => c.id === Number(id));
  },
  addCourse(course) {
    const data = getDB();
    if (!course.title || !course.title.trim()) {
      return { error: 'عنوان الدورة/الدبلوم مطلوب' };
    }
    if (!course.category || (course.category !== 'دورة' && course.category !== 'دبلوم')) {
      return { error: 'التصنيف يجب أن يكون "دورة" أو "دبلوم"' };
    }
    const newCourse = {
      id: data.nextCourseId++,
      title: course.title.trim(),
      description: (course.description || '').trim(),
      duration: (course.duration || '').trim(),
      hours: (course.hours || '').trim(),
      fees: (course.fees || '').trim(),
      category: course.category,
      certificate: (course.certificate || '').trim()
    };
    data.courses.push(newCourse);
    saveDB(data);
    return { course: newCourse };
  },
  deleteCourse(id) {
    const data = getDB();
    const courseId = Number(id);
    const exists = data.courses.some(c => c.id === courseId);
    if (!exists) return false;
    data.courses = data.courses.filter(c => c.id !== courseId);
    // keep inquiries but clear course reference conceptually (title still shown if cached; we leave course_id as-is)
    saveDB(data);
    return true;
  },

  // Inquiries
  createInquiry(userId, courseId, message) {
    const data = getDB();
    const inq = {
      id: data.nextInquiryId++,
      user_id: userId,
      course_id: courseId ? Number(courseId) : null,
      message: message.trim(),
      admin_reply: null,
      status: 'pending',
      created_at: new Date().toISOString(),
      replied_at: null
    };
    data.inquiries.push(inq);
    saveDB(data);
    return inq;
  },
  getInquiriesByUser(userId) {
    const data = getDB();
    return data.inquiries
      .filter(i => i.user_id === Number(userId))
      .map(i => {
        const course = data.courses.find(c => c.id === i.course_id);
        return { ...i, course_title: course ? course.title : null };
      })
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  },
  getAllInquiries() {
    const data = getDB();
    return data.inquiries
      .map(i => {
        const user = data.users.find(u => u.id === i.user_id);
        const course = data.courses.find(c => c.id === i.course_id);
        return {
          ...i,
          full_name: user ? user.full_name : 'محذوف',
          email: user ? user.email : '',
          phone: user ? user.phone : '',
          course_title: course ? course.title : null
        };
      })
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  },
  replyToInquiry(id, reply) {
    const data = getDB();
    const inq = data.inquiries.find(i => i.id === Number(id));
    if (!inq) return false;
    inq.admin_reply = reply.trim();
    inq.status = 'replied';
    inq.replied_at = new Date().toISOString();
    saveDB(data);
    return true;
  }
};

// Helpers
function escapeHtml(str) {
  if (!str) return '';
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function formatDate(s) {
  if (!s) return '';
  try {
    return new Date(s).toLocaleDateString('ar-JO', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  } catch {
    return s;
  }
}

function requireLogin(role) {
  const session = DB.getSession();
  if (!session) {
    window.location.href = 'index.html';
    return null;
  }
  if (role && session.role !== role) {
    window.location.href = session.role === 'admin' ? 'admin.html' : 'dashboard.html';
    return null;
  }
  return session;
}
