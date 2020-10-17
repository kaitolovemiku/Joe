<template>
  <CRow>
    <CCol col>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong>Project Details</strong>
          <div class="card-header-actions">
            <a
              href="https://coreui.io/vue/docs/components/breadcrumb"
              class="card-header-action"
              rel="noreferrer noopener"
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <img
                  alt="PDF file"
                  src="data:image/png;base64,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"
                />
                <div class="row">
                  <div class="col-md-12" style="margin-top: 10px">
                    <button
                      class="btn btn-primary btn-block"
                      @click="downloadFile(projects[0].projectFileName)"
                    >
                      Download file
                    </button>
                  </div>
                </div>
              </div>
              <div
                v-for="project in projects"
                v-bind:key="project.id"
                class="col-md-9"
              >
                <h1>
                  {{ project.projectNameEn }} ({{ project.projectNameTh }})
                </h1>
                <div class="row">
                  <div class="col-md-12">
                    <form @submit.prevent="updateProject()">
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Description:</label
                        >
                        <div class="col-sm-9">{{ project.projectBg }}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Advisor:</label
                        >
                        <div class="col-sm-9">{{ project.projectAdvisor }}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Member:</label
                        >
                        <div class="col-sm-9">{{ project.projectMember }}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Duration:</label
                        >
                        <div class="col-sm-9">
                          {{ project.projectDuration }}
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Type:</label
                        >
                        <div class="col-sm-9">{{ project.projectType }}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Point SP1:</label
                        >
                        <div class="col-sm-9">
                          {{ project.projectPointSP1 }}
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Point SP2:</label
                        >
                        <div class="col-sm-9">
                          {{ project.projectPointSP2 }}
                        </div>
                      </div>
                      <!-- <div class="row">
                        <div class="col-md-12">
                          <button class="btn btn-primary btn-block">Update project point</button>
                        </div>
                      </div> -->
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong>Project progress document (Senior 1)</strong>
          <div class="card-header-actions">
            <a
              href="https://coreui.io/vue/docs/components/breadcrumb"
              class="card-header-action"
              rel="noreferrer noopener"
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <div
            class="row"
            v-for="progress in projectProgress.filter(
              (item) =>
                item.data.seniorType.includes('senior1') &&
                item.data.progressType.includes('progress1')
            )"
            :key="'senior1True' + progress.id"
          >
            <div class="col-md-12">
              <h2 style="text-align: center">
                {{ progress.data.progressType }}
              </h2>
            </div>
            <div class="col-md-3">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <img src="pdf.png" style="width: 100%" />
                  </div>
                  <div class="col-md-12">
                    <button
                      class="btn btn-primary btn-block"
                      @click="downloadProgress(progress)"
                    >
                      Download file
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <form @submit.prevent="updateProgress(user, 'senior1Progress1')">
                <div class="form-group">
                  <label>Advisor Point</label>
                  <input
                    type="text"
                    class="form-control"
                    :value="(user.senior1.progress1.id = progress.id)"
                    required
                    style="display: none"
                  />
                  <input
                    type="number"
                    class="form-control"
                    min="0"
                    max="20"
                    v-model="user.senior1.progress1.advisorPoint"
                    :placeholder="progress.data.advisorPoint"
                    required
                  />
                </div>

                <div class="form-group">
                  <label>Advisor Comment</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.senior1.progress1.advisorComment"
                    :placeholder="progress.data.advisorComment"
                  />
                </div>

                <div class="form-group">
                  <button class="btn btn-primary btn-block">
                    Update Progress
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-12">
              <hr />
            </div>
          </div>
          <div
            class="row"
            v-for="progress in projectProgress.filter(
              (item) =>
                item.data.seniorType.includes('senior1') &&
                item.data.progressType.includes('progress2')
            )"
            :key="'senior1True' + progress.id"
          >
            <div class="col-md-12">
              <h2 style="text-align: center">
                {{ progress.data.progressType }}
              </h2>
            </div>
            <div class="col-md-3">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <img src="pdf.png" style="width: 100%" />
                  </div>
                  <div class="col-md-12">
                    <button
                      class="btn btn-primary btn-block"
                      @click="downloadProgress(progress)"
                    >
                      Download file
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <form @submit.prevent="updateProgress(user, 'senior1Progress2')">
                <div class="form-group">
                  <label>Advisor Point</label>
                  <input
                    type="text"
                    class="form-control"
                    :value="(user.senior1.progress2.id = progress.id)"
                    required
                    style="display: none"
                  />
                  <input
                    type="number"
                    class="form-control"
                    min="0"
                    max="20"
                    v-model="user.senior1.progress2.advisorPoint"
                    :placeholder="progress.data.advisorPoint"
                    required
                  />
                </div>

                <div class="form-group">
                  <label>Advisor Comment</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.senior1.progress2.advisorComment"
                    :placeholder="progress.data.advisorComment"
                  />
                </div>

                <div class="form-group">
                  <button class="btn btn-primary btn-block">
                    Update Progress
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-12">
              <hr />
            </div>
          </div>
          <div
            class="row"
            v-for="progress in projectProgress.filter(
              (item) =>
                item.data.seniorType.includes('senior1') &&
                item.data.progressType.includes('Final Presentation')
            )"
            :key="'senior1True' + progress.id"
          >
            <div class="col-md-12">
              <h2 style="text-align: center">
                {{ progress.data.progressType }}
              </h2>
            </div>
            <div class="col-md-3">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <img src="pdf.png" style="width: 100%" />
                  </div>
                  <div class="col-md-12">
                    <button
                      class="btn btn-primary btn-block"
                      @click="downloadProgress(progress)"
                    >
                      Download file
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <form @submit.prevent="updateProgress(user, 'senior1FinalPre')">
                <div class="form-group">
                  <label>Advisor Point</label>
                  <input
                    type="text"
                    class="form-control"
                    :value="(user.senior1.finalPre.id = progress.id)"
                    required
                    style="display: none"
                  />
                  <input
                    type="number"
                    class="form-control"
                    min="0"
                    max="20"
                    v-model="user.senior1.finalPre.advisorPoint"
                    :placeholder="progress.data.advisorPoint"
                    required
                  />
                </div>

                <div class="form-group">
                  <label>Advisor Comment</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.senior1.finalPre.advisorComment"
                    :placeholder="progress.data.advisorComment"
                  />
                </div>

                <div
                  v-if="
                    progress.data.progressType.includes('Final Presentation') ||
                    progress.data.progressType.includes('Final Documentation')
                  "
                >
                  <div class="form-group">
                    <label>Committee1 Point</label>
                    <input
                      type="text"
                      class="form-control"
                      min="0"
                      max="10"
                      v-model="user.senior1.finalPre.Committee1Point"
                      :placeholder="progress.data.Committee1Point"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label>Committee1 Comment</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="user.senior1.finalPre.Committee1Comment"
                      :placeholder="progress.data.Committee1Comment"
                    />
                  </div>

                  <div class="form-group">
                    <label>Committee2 Point</label>
                    <input
                      type="number"
                      class="form-control"
                      min="0"
                      max="10"
                      v-model="user.senior1.finalPre.Committee2Point"
                      :placeholder="progress.data.Committee2Point"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label>Committee2 Comment</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="user.senior1.finalPre.Committee2Comment"
                      :placeholder="progress.data.Committee2Comment"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <button class="btn btn-primary btn-block">
                    Update Progress
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-12">
              <hr />
            </div>
          </div>
          <div
            class="row"
            v-for="progress in projectProgress.filter(
              (item) =>
                item.data.seniorType.includes('senior1') &&
                item.data.progressType.includes('Final Documentation')
            )"
            :key="'senior1True' + progress.id"
          >
            <div class="col-md-12">
              <h2 style="text-align: center">
                {{ progress.data.progressType }}
              </h2>
            </div>
            <div class="col-md-3">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <img src="pdf.png" style="width: 100%" />
                  </div>
                  <div class="col-md-12">
                    <button
                      class="btn btn-primary btn-block"
                      @click="downloadProgress(progress)"
                    >
                      Download file
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <form @submit.prevent="updateProgress(user, 'senior1FinalDoc')">
                <div class="form-group">
                  <label>Advisor Point</label>
                  <input
                    type="advisorPoint"
                    class="form-control"
                    :value="(user.senior1.finalDoc.id = progress.id)"
                    required
                    style="display: none"
                  />
                  <input
                    type="advisorPoint"
                    class="form-control"
                    min="0"
                    max="10"
                    v-model="user.senior1.finalDoc.advisorPoint"
                    :placeholder="progress.data.advisorPoint"
                    required
                  />
                </div>

                <div class="form-group">
                  <label>Advisor Comment</label>
                  <input
                    type="advisorComment"
                    class="form-control"
                    v-model="user.senior1.finalDoc.advisorComment"
                    :placeholder="progress.data.advisorComment"
                  />
                </div>

                <div
                  v-if="
                    progress.data.progressType.includes('Final Presentation') ||
                    progress.data.progressType.includes('Final Documentation')
                  "
                >
                  <div class="form-group">
                    <label>Committee1 Point</label>
                    <input
                      type="Committee1Point"
                      class="form-control"
                      min="0"
                      max="5"
                      v-model="user.senior1.finalDoc.Committee1Point"
                      :placeholder="progress.data.Committee1Point"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label>Committee1 Comment</label>
                    <input
                      type="Committee1Comment"
                      class="form-control"
                      v-model="user.senior1.finalDoc.Committee1Comment"
                      :placeholder="progress.data.Committee1Comment"
                    />
                  </div>

                  <div class="form-group">
                    <label>Committee2 Point</label>
                    <input
                      type="Committee2Point"
                      class="form-control"
                      min="0"
                      max="5"
                      v-model="user.senior1.finalDoc.Committee2Point"
                      :placeholder="progress.data.Committee2Point"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label>Committee2 Comment</label>
                    <input
                      type="Committee2Comment"
                      class="form-control"
                      v-model="user.senior1.finalDoc.Committee2Comment"
                      :placeholder="progress.data.Committee2Comment"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <button class="btn btn-primary btn-block">
                    Update Progress
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-12">
              <hr />
            </div>
          </div>
          <div
            class="row"
            v-if="
              projectProgress.filter(
                (item) =>
                  item.data.seniorType.includes('senior1') &&
                  item.data.progressType.includes('progress1')
              ).length > 0
            "
          ></div>
          <div v-else>
            <div class="col-md-12">
              <h1>
                <CIcon name="cil-ban" style="color: red" height="30" />Student
                have not yet submitted Progress1 document!
              </h1>
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <hr />
          </div>
          <div
            class="row"
            v-if="
              projectProgress.filter(
                (item) =>
                  item.data.seniorType.includes('senior1') &&
                  item.data.progressType.includes('progress2')
              ).length > 0
            "
          ></div>
          <div v-else>
            <div class="col-md-12">
              <h1>
                <CIcon name="cil-ban" style="color: red" height="30" />Student
                have not yet submitted Progress2 document!
              </h1>
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <hr />
          </div>
          <div
            class="row"
            v-if="
              projectProgress.filter(
                (item) =>
                  item.data.seniorType.includes('senior1') &&
                  item.data.progressType.includes('Final Presentation')
              ).length > 0
            "
          ></div>
          <div v-else>
            <div class="col-md-12">
              <h1>
                <CIcon name="cil-ban" style="color: red" height="30" />Student
                have not yet submitted final presentation document!
              </h1>
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <hr />
          </div>
          <div
            class="row"
            v-if="
              projectProgress.filter(
                (item) =>
                  item.data.seniorType.includes('senior1') &&
                  item.data.progressType.includes('Final Documentation')
              ).length > 0
            "
          ></div>
          <div v-else>
            <div class="col-md-12">
              <h1>
                <CIcon name="cil-ban" style="color: red" height="30" />Student
                have not yet submitted final document document!
              </h1>
            </div>
          </div>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong>Project progress document (Senior 2)</strong>
          <div class="card-header-actions">
            <a
              href="https://coreui.io/vue/docs/components/breadcrumb"
              class="card-header-action"
              rel="noreferrer noopener"
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <div
            class="row"
            v-for="progress in projectProgress.filter(
              (item) =>
                item.data.seniorType.includes('senior2') &&
                item.data.progressType.includes('progress1')
            )"
            :key="'senior1True' + progress.id"
          >
            <div class="col-md-12">
              <h2 style="text-align: center">
                {{ progress.data.progressType }}
              </h2>
            </div>
            <div class="col-md-3">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <img src="pdf.png" style="width: 100%" />
                  </div>
                  <div class="col-md-12">
                    <button
                      class="btn btn-primary btn-block"
                      @click="downloadProgress(progress)"
                    >
                      Download file
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <form @submit.prevent="updateProgress(user, 'senior2Progress1')">
                <div class="form-group">
                  <label>Advisor Point</label>
                  <input
                    type="text"
                    class="form-control"
                    :value="(user.senior2.progress1.id = progress.id)"
                    required
                    style="display: none"
                  />
                  <input
                    type="number"
                    class="form-control"
                    min="0"
                    max="20"
                    v-model="user.senior2.progress1.advisorPoint"
                    :placeholder="progress.data.advisorPoint"
                    required
                  />
                </div>

                <div class="form-group">
                  <label>Advisor Comment</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.senior2.progress1.advisorComment"
                    :placeholder="progress.data.advisorComment"
                  />
                </div>

                <div class="form-group">
                  <button class="btn btn-primary btn-block">
                    Update Progress
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-12">
              <hr />
            </div>
          </div>
          <div
            class="row"
            v-for="progress in projectProgress.filter(
              (item) =>
                item.data.seniorType.includes('senior2') &&
                item.data.progressType.includes('progress2')
            )"
            :key="'senior1True' + progress.id"
          >
            <div class="col-md-12">
              <h2 style="text-align: center">
                {{ progress.data.progressType }}
              </h2>
            </div>
            <div class="col-md-3">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <img src="pdf.png" style="width: 100%" />
                  </div>
                  <div class="col-md-12">
                    <button
                      class="btn btn-primary btn-block"
                      @click="downloadProgress(progress)"
                    >
                      Download file
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <form @submit.prevent="updateProgress(user, 'senior2Progress2')">
                <div class="form-group">
                  <label>Advisor Point</label>
                  <input
                    type="text"
                    class="form-control"
                    :value="(user.senior2.progress2.id = progress.id)"
                    required
                    style="display: none"
                  />
                  <input
                    type="number"
                    class="form-control"
                    min="0"
                    max="20"
                    v-model="user.senior2.progress2.advisorPoint"
                    :placeholder="progress.data.advisorPoint"
                    required
                  />
                </div>

                <div class="form-group">
                  <label>Advisor Comment</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.senior2.progress2.advisorComment"
                    :placeholder="progress.data.advisorComment"
                  />
                </div>

                <div class="form-group">
                  <button class="btn btn-primary btn-block">
                    Update Progress
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-12">
              <hr />
            </div>
          </div>
          <div
            class="row"
            v-for="progress in projectProgress.filter(
              (item) =>
                item.data.seniorType.includes('senior2') &&
                item.data.progressType.includes('Final Presentation')
            )"
            :key="'senior1True' + progress.id"
          >
            <div class="col-md-12">
              <h2 style="text-align: center">
                {{ progress.data.progressType }}
              </h2>
            </div>
            <div class="col-md-3">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <img src="pdf.png" style="width: 100%" />
                  </div>
                  <div class="col-md-12">
                    <button
                      class="btn btn-primary btn-block"
                      @click="downloadProgress(progress)"
                    >
                      Download file
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <form @submit.prevent="updateProgress(user, 'senior2finalPre')">
                <div class="form-group">
                  <label>Advisor Point</label>
                  <input
                    type="text"
                    class="form-control"
                    :value="(user.senior2.finalPre.id = progress.id)"
                    required
                    style="display: none"
                  />
                  <input
                    type="number"
                    class="form-control"
                    min="0"
                    max="20"
                    v-model="user.senior2.finalPre.advisorPoint"
                    :placeholder="progress.data.advisorPoint"
                    required
                  />
                </div>

                <div class="form-group">
                  <label>Advisor Comment</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.senior2.finalPre.advisorComment"
                    :placeholder="progress.data.advisorComment"
                  />
                </div>

                <div
                  v-if="
                    progress.data.progressType.includes('Final Presentation') ||
                    progress.data.progressType.includes('Final Documentation')
                  "
                >
                  <div class="form-group">
                    <label>Committee1 Point</label>
                    <input
                      type="number"
                      class="form-control"
                      min="0"
                      max="10"
                      v-model="user.senior2.finalPre.Committee1Point"
                      :placeholder="progress.data.Committee1Point"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label>Committee1 Comment</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="user.senior2.finalPre.Committee1Comment"
                      :placeholder="progress.data.Committee1Comment"
                    />
                  </div>

                  <div class="form-group">
                    <label>Committee2 Point</label>
                    <input
                      type="number"
                      class="form-control"
                      min="0"
                      max="10"
                      v-model="user.senior2.finalPre.Committee2Point"
                      :placeholder="progress.data.Committee2Point"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label>Committee2 Comment</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="user.senior2.finalPre.Committee2Comment"
                      :placeholder="progress.data.Committee2Comment"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <button class="btn btn-primary btn-block">
                    Update Progress
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-12">
              <hr />
            </div>
          </div>
          <div
            class="row"
            v-for="progress in projectProgress.filter(
              (item) =>
                item.data.seniorType.includes('senior2') &&
                item.data.progressType.includes('Final Documentation')
            )"
            :key="'senior1True' + progress.id"
          >
            <div class="col-md-12">
              <h2 style="text-align: center">
                {{ progress.data.progressType }}
              </h2>
            </div>
            <div class="col-md-3">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <img src="pdf.png" style="width: 100%" />
                  </div>
                  <div class="col-md-12">
                    <button
                      class="btn btn-primary btn-block"
                      @click="downloadProgress(progress)"
                    >
                      Download file
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <form @submit.prevent="updateProgress(user, 'senior2FinalDoc')">
                <div class="form-group">
                  <label>Advisor Point</label>
                  <input
                    type="text"
                    class="form-control"
                    :value="(user.senior2.finalDoc.id = progress.id)"
                    required
                    style="display: none"
                  />
                  <input
                    type="number"
                    class="form-control"
                    min="0"
                    max="10"
                    v-model="user.senior2.finalDoc.advisorPoint"
                    :placeholder="progress.data.advisorPoint"
                    required
                  />
                </div>

                <div class="form-group">
                  <label>Advisor Comment</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.senior2.finalDoc.advisorComment"
                    :placeholder="progress.data.advisorComment"
                  />
                </div>

                <div
                  v-if="
                    progress.data.progressType.includes('Final Presentation') ||
                    progress.data.progressType.includes('Final Documentation')
                  "
                >
                  <div class="form-group">
                    <label>Committee1 Point</label>
                    <input
                      type="number"
                      class="form-control"
                      min="0"
                      max="5"
                      v-model="user.senior2.finalDoc.Committee1Point"
                      :placeholder="progress.data.Committee1Point"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label>Committee1 Comment</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="user.senior2.finalDoc.Committee1Comment"
                      :placeholder="progress.data.Committee1Comment"
                    />
                  </div>

                  <div class="form-group">
                    <label>Committee2 Point</label>
                    <input
                      type="number"
                      class="form-control"
                      min="0"
                      max="5"
                      v-model="user.senior2.finalDoc.Committee2Point"
                      :placeholder="progress.data.Committee2Point"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label>Committee2 Comment</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="user.senior2.finalDoc.Committee2Comment"
                      :placeholder="progress.data.Committee2Comment"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <button class="btn btn-primary btn-block">
                    Update Progress
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-12">
              <hr />
            </div>
          </div>
          <div
            class="row"
            v-if="
              projectProgress.filter(
                (item) =>
                  item.data.seniorType.includes('senior2') &&
                  item.data.progressType.includes('progress1')
              ).length > 0
            "
          ></div>
          <div v-else>
            <div class="col-md-12">
              <h1>
                <CIcon name="cil-ban" style="color: red" height="30" />Student
                have not yet submitted Progress1 document!
              </h1>
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <hr />
          </div>
          <div
            class="row"
            v-if="
              projectProgress.filter(
                (item) =>
                  item.data.seniorType.includes('senior2') &&
                  item.data.progressType.includes('progress2')
              ).length > 0
            "
          ></div>
          <div v-else>
            <div class="col-md-12">
              <h1>
                <CIcon name="cil-ban" style="color: red" height="30" />Student
                have not yet submitted Progress2 document!
              </h1>
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <hr />
          </div>
          <div
            class="row"
            v-if="
              projectProgress.filter(
                (item) =>
                  item.data.seniorType.includes('senior2') &&
                  item.data.progressType.includes('Final Presentation')
              ).length > 0
            "
          ></div>
          <div v-else>
            <div class="col-md-12">
              <h1>
                <CIcon name="cil-ban" style="color: red" height="30" />Student
                have not yet submitted final presentation document!
              </h1>
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <hr />
          </div>
          <div
            class="row"
            v-if="
              projectProgress.filter(
                (item) =>
                  item.data.seniorType.includes('senior2') &&
                  item.data.progressType.includes('Final Documentation')
              ).length > 0
            "
          ></div>
          <div v-else>
            <div class="col-md-12">
              <h1>
                <CIcon name="cil-ban" style="color: red" height="30" />Student
                have not yet submitted final document document!
              </h1>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import { flagSet } from "@coreui/icons";
const db = firebase.firestore();
export default {
  name: "Breadcrumbs",
  data() {
    return {
      projects: [],
      projectProgress: [],
      finalPresent: [],
      finalDocument: [],
      options: ["P", "S", "U", "I"],
      totalPoint: 0,
      status3: "",
      user: {
        senior1: { progress1: {}, progress2: {}, finalPre: {}, finalDoc: {} },
        senior2: { progress1: {}, progress2: {}, finalPre: {}, finalDoc: {} },
      },
      projectPointSP1: 0,
      projectPointSP2: 0,
      students: [],
      teachers: [],
      projectStatus: "",
      point3: "",
      comment3: "",
      comment2: "",
      status2: "",
      point2: "",
      comment1: "",
      status1: "",
      point1: "",
    };
  },
  created() {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.students.push({ id: doc.id, data: doc.data().username });
        });
      });
    db.collection("teachers")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.teachers.push({ id: doc.id, data: doc.data().teacherName });
        });
      });
    db.collection("projects")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (this.$route.params.projectId == doc.id) {
            this.projects.push({
              id: doc.id,
              projectNameTh: doc.data().projectNameTh,
              projectNameEn: doc.data().projectNameEn,
              projectMember: this.students
                .filter((item) => doc.data().projectMember.includes(item.id))
                .map((item) => {
                  return item.data;
                }),
              projectAdvisor: this.teachers
                .filter((item) => doc.data().projectAdvisor.includes(item.id))
                .map((item) => {
                  return item.data;
                }),
              projectCoAdvisor: this.teachers
                .filter((item) => doc.data().projectCoAdvisor.includes(item.id))
                .map((item) => {
                  return item.data;
                }),
              projectCommittee: this.teachers
                .filter((item) => doc.data().projectCommittee.includes(item.id))
                .map((item) => {
                  return item.data;
                }),
              projectBg: doc.data().projectBg,
              projectFileName: doc.data().projectFileName,
              projectType: doc.data().projectType,
              projectDuration: doc.data().projectDuration,
              projectPoint: doc.data().projectPoint,
              projectPointSP1: doc.data().projectPointSP1,
              projectPointSP2: doc.data().projectPointSP2,
              projectStatus: doc.data().projectStatus,
            });
          }
        });
        return this.projects, this.updateProject();
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    db.collection("projectProgress")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(
            "progress test naja ->",
            doc.data().projectId,
            this.projects[0].id,
            doc.data().projectId === this.projects[0].id
          );
          if (doc.data().projectId === this.projects[0].id) {
            this.projectProgress.push({ id: doc.id, data: doc.data() });
          }
        });
        return this.projectProgress;
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    db.collection("finalPresent")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().projectId == this.projects[0].id) {
            this.finalPresent.push({
              id: doc.id,
              comment: doc.data().comment,
              point: doc.data().point,
              status: doc.data().status,
              projectId: doc.data().projectId,
            });
          }
        });
        return this.finalPresent;
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    db.collection("finalDocument")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().projectId == this.projects[0].id) {
            this.finalDocument.push({
              id: doc.id,
              comment: doc.data().comment,
              point: doc.data().point,
              status: doc.data().status,
              projectId: doc.data().projectId,
            });
          }
        });
        return this.finalDocument;
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  },
  methods: {
    downloadFile(item) {
      //Create a root reference
      var storageRef = firebase.storage().ref();
      storageRef
        .child(item)
        .getDownloadURL()
        .then(function (url) {
          // `url` is the download URL for 'images/stars.jpg'
          window.open(url, "_blank");
          return (this.projectUrl = url);
        })
        .catch((error) => {
          console.log("Error getting files url: ", error);
        });
    },
    downloadProgress(item) {
      // db.collection("projectProgress")
      //   .get()
      //   .then((querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //     db.collection("projects").doc(this.$route.params.projectId).update({
      //       projectPointSP1: this.projectPointSP1,
      //       projectPointSP2: this.projectPointSP2,
      //       createdAt: new Date(),
      //     });
      //   })
      //   .catch((error) => {
      //     console.log("Error getting documents: ", error);
      //   });
      // Create a root reference
      var storageRef = firebase.storage().ref();
      storageRef
        .child(item.data.fileName)
        .getDownloadURL()
        .then(function (url) {
          // `url` is the download URL for 'images/stars.jpg'
          window.open(url, "_blank");
          return (this.projectUrl = url);
        })
        .catch((error) => {
          console.log("Error getting files url: ", error);
        });
    },
    loadOnce: function () {
      location.reload();
    },
    updateProgress(item, type) {
      if (type === "senior1Progress1") {
        let res = this.updateProgress1(item.senior1.progress1);
        if (res) {
          this.loadOnce();
        }
      } else if (type === "senior1Progress2") {
        let res = this.updateProgress2(item.senior1.progress2);
        if (res) {
          this.loadOnce();
        }
      } else if (type === "senior1FinalPre") {
        let res = this.updateFinalPre(item.senior1.finalPre);
        if (res) {
          this.loadOnce();
        }
      } else if (type === "senior1FinalDoc") {
        let res = this.updateFinalDoc(item.senior1.finalDoc);
        if (res) {
          this.loadOnce();
        }
      } else if (type === "senior2Progress1") {
        let res = this.updateProgress1(item.senior2.progress1);
        if (res) {
          this.loadOnce();
        }
      } else if (type === "senior2Progress2") {
        let res = this.updateProgress1(item.senior2.progress2);
        if (res) {
          this.loadOnce();
        }
      } else if (type === "senior2FinalPre") {
        let res = this.updateFinalPre(item.senior2.finalPre);
        if (res) {
          this.loadOnce();
        }
      } else if (type === "senior2FinalDoc") {
        let res = this.updateFinalPre(item.senior2.finalDoc);
        if (res) {
          this.loadOnce();
        }
      } else {
        alert("Sorry! there is something wrong in update progress system.");
      }
    },
    updateProgress1(data) {
      db.collection("projectProgress")
        .doc(data.id)
        .update({
          advisorComment: data.advisorComment,
          advisorPoint: data.advisorPoint,
          createdAt: new Date(),
        })
        .then(() => {
          window.alert("Update progress successed!");
          return true;
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
          return false;
        });
    },
    updateProgress2(data) {
      db.collection("projectProgress")
        .doc(data.id)
        .update({
          advisorComment: data.advisorComment,
          advisorPoint: data.advisorPoint,
          createdAt: new Date(),
        })
        .then(() => {
          window.alert("Update progress successed!");
          return true;
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
          return false;
        });
    },
    updateFinalPre(data) {
      db.collection("projectProgress")
        .doc(data.id)
        .update({
          advisorComment: data.advisorComment,
          advisorPoint: data.advisorPoint,
          committee1Comment: data.Committee1Comment,
          committee1Point: data.Committee1Point,
          committee2Comment: data.Committee2Comment,
          committee2Point: data.Committee2Point,
          createdAt: new Date(),
        })
        .then(() => {
          window.alert("Update progress successed!");
          return true;
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
          return false;
        });
    },
    updateFinalDoc(data) {
      db.collection("projectProgress")
        .doc(data.id)
        .update({
          advisorComment: data.advisorComment,
          advisorPoint: data.advisorPoint,
          committee1Comment: data.Committee1Comment,
          committee1Point: data.Committee1Point,
          committee2Comment: data.Committee2Comment,
          committee2Point: data.Committee2Point,
          createdAt: new Date(),
        })
        .then(() => {
          window.alert("Update progress successed!");
          return true;
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
          return false;
        });
    },
    updateProject() {
      db.collection("projectProgress")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (
              doc.data().projectId == this.$route.params.projectId &&
              doc.data().seniorType.includes("senior1")
            ) {
              this.projectPointSP1 +=
                parseInt(doc.data().advisorPoint) +
                parseInt(doc.data().committee1Point) +
                parseInt(doc.data().committee2Point);
            }
            if (
              doc.data().projectId == this.$route.params.projectId &&
              doc.data().seniorType.includes("senior2")
            ) {
              this.projectPointSP2 +=
                parseInt(doc.data().advisorPoint) +
                parseInt(doc.data().committee1Point) +
                parseInt(doc.data().committee2Point);
            }
          });
          db.collection("projects").doc(this.$route.params.projectId).update({
            projectPointSP1: this.projectPointSP1,
            projectPointSP2: this.projectPointSP2,
            createdAt: new Date(),
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },
};
</script>

<style>
.breadcrumb-item + .font-xl.breadcrumb-item::before {
  color: rgb(140, 195, 38);
  content: ">>";
  padding: 0px 10px;
}
</style>
