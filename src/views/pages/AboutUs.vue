<template>
  <CContainer class="align-items-center">
    <CRow class="justify-content-center">
      <CCol md="12">
        <h1>About us</h1>
      </CCol>
      <CCol md="12">
        <hr />
      </CCol>
      <CCol md="12">
        <CCard>
          <!-- <CCardHeader>
            <CIcon name="cil-justify-center" />
            <strong>Profile</strong>
          </CCardHeader> -->
          <CCardBody>
            <CRow>
              <CCol md="12">
                <h3>Objective</h3>
              </CCol>
              <CCol md="12">
                <p>
                  To make student in Mae Fah Luang university can submit a
                  senior project easily. Teacher also accept to check senior
                  project and give some points. Also the junior student accept
                  to view senior project to improve his/her project.
                </p>
              </CCol>
            </CRow>
            <br />
            <CRow>
              <CCol md="12">
                <h3>Roles of this application</h3>
              </CCol>
              <CCol md="12">
                <p>Admin</p>
              </CCol>
              <CCol md="12">
                <ul id="example-1">
                  <li v-for="item in adminRole" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </CCol>
              <CCol md="12">
                <p>Advisor</p>
              </CCol>
              <CCol md="12">
                <ul id="example-1">
                  <li v-for="item in advisorRole" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </CCol>
              <CCol md="12">
                <p>Senior Student</p>
              </CCol>
              <CCol md="12">
                <ul id="example-1">
                  <li v-for="item in seniorRole" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </CCol>
              <CCol md="12">
                <p>Student</p>
              </CCol>
              <CCol md="12">
                <ul id="example-1">
                  <li v-for="item in guestRole" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CContainer class="align-items-center">
              <CRow>
                <CCol md="12">
                  <h3>Development Team</h3>
                </CCol>
                <CCol md="4" style="text-align:center;">
                  <CRow>
                    <CCol md="12">
                      <img
                        alt="SE"
                        src="../../../public/projectMember2.png"
                        style="width: 150px; margin-top: 20px"
                      />
                    </CCol>
                    <CCol md="12">
                    <br />
                    </CCol>
                    <CCol md="12">
                      <p>นาย วริทธิ์ธร พิริยะปัญญาวงศ์</p>
                      <p>Mr. Waritthorn Piriyapunyawong</p>
                      <p>6031305032@lamduan.mfu.ac.th</p>
                      <p>0943212220</p>
                    </CCol>
                  </CRow>
                </CCol>
                <CCol md="4" style="text-align:center;">
                  <CRow>
                    <CCol md="12">
                      <img
                        alt="SE"
                        src="../../../public/projectMember1.png"
                        style="width: 150px; margin-top: 20px"
                      />
                    </CCol>
                    <CCol md="12">
                      <br />
                    </CCol>
                    <CCol md="12">
                      <p>นส. รัชนีกร รุ่งวิไลรัตนะ</p>
                      <p>Miss Ratchaneekorn Rungwilairatthana</p>
                      <p>Rungwilairatthanakul@gmail.com</p>
                      <p>090231832</p>
                    </CCol>
                  </CRow>
                </CCol>
                <CCol md="4" style="text-align:center;">
                  <CRow>
                    <CCol md="12">
                      <img
                        alt="SE"
                        src="https://itschool.mfu.ac.th/fileadmin/_processed_/6/4/csm_%E0%B8%AD.%E0%B8%97%E0%B8%B4%E0%B8%A7_dd5bc71ba2.jpg"
                        style="width: 150px; margin-top: 20px"
                      />
                    </CCol>
                    <CCol md="12">
                      <br />
                    </CCol>
                    <CCol md="12">
                      <p>อาจารย์ ทิว หงษ์ทอง</p>
                      <p>Aj. Tew Hongthong</p>
                      <p>tew.hon@mfu.ac.th</p>
                      <p>053-916747</p>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CContainer>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      adminRole: [
        "Manage users data.",
        "Manage senior project.",
        "Download senior project.",
        "Download senior score report.",
        "View senior student score.",
        "Print the report of senior student point.",
        "Manage profile.",
      ],
      seniorRole: [
        "Manage senior Project.",
        "Download senior project.",
        "View senior project score.",
        "Manage profile.",
      ],
      guestRole: [
        "View senior project.",
        "Download senior project.",
        "Manage profile.",
      ],
      advisorRole: [
        "View senior project.",
        "Download senior project.",
        "Upload teacher journal.",
        "Give senior project score.",
        "Manage profile.",
      ],
    };
  },
};
</script>
