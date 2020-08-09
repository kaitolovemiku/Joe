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
                  <div class="col-md-12" style="margin-top:10px;">
                    <button
                      class="btn btn-primary btn-block"
                      @click="downloadFile()"
                    >Download file</button>
                  </div>
                </div>
              </div>
              <div v-for="project in projects" v-bind:key="project.id" class="col-md-9">
                <h1>{{project.projectNameEn}} ({{project.projectNameTh}})</h1>
                <div class="row">
                  <div class="col-md-12">
                    <form>
                      <div class="form-group row">
                        <label
                          for="staticEmail"
                          class="col-sm-3 col-form-label"
                        >Project Description:</label>
                        <div class="col-sm-9">{{project.projectBg}}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Project Advisor:</label>
                        <div class="col-sm-9">{{project.projectAdvisor}}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Project Member:</label>
                        <div class="col-sm-9">{{project.projectMember}}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Project Duration:</label>
                        <div class="col-sm-9">{{project.projectDuration}}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Project Type:</label>
                        <div class="col-sm-9">{{project.projectType}}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Project Point:</label>
                        <div class="col-sm-9">{{project.projectPoint}}</div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Project Status:</label>
                        <div class="col-sm-9">
                          <select class="form-control" v-model="projectStatus">
                            <option v-for="option in options" :key="option" value>{{ option }}</option>
                          </select>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <button
                            @click="updateProject()"
                            class="btn btn-primary btn-block"
                          >Update project data</button>
                        </div>
                      </div>
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
              <small class="text-muted"></small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <div class="container">
            <div class="row" v-for="item in projectProgress.filter(item => item.data.seniorType.includes('senior1'))" :key="item.id">
              <div class="col-md-3">
                <img
                  alt="PDF file"
                  src="data:image/png;base64,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"
                  style="width:100px;"
                />
                <button
                  class="btn btn-primary btn-block"
                  v-on:click="downloadProgress2(item.data.fileName)"
                >Download file</button>
              </div>
              <div v-if="item.data.progressType == 'progress1' && item.data.seniorType == 'senior1'">
                <div class="col-md-9">
                  <h3
                    class="center"
                  >{{item.data.progressType}}</h3>
                  <div class="col-md-12">
                    <form class="form-group row">
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior1Progress1AdvisorPoint"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Comment: </label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="text"
                          :value="senior1Progress1AdvisorComment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <button
                        type="submit"
                        @click="testUpdate()"
                        class="btn btn-primary mb-2 float-right"
                      >Update</button>
                    </form>
                  </div>
                </div>
              </div>
              <div v-if="item.data.progressType == 'progress2' && item.data.seniorType == 'senior1'">
                <div class="col-md-9">
                  <h3
                    class="center"
                  >{{item.data.progressType}}</h3>
                  <div class="col-md-12">
                    <form class="form-group row">
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior1Progress2AdvisorPoint"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Comment: </label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="text"
                          :value="senior1Progress2AdvisorComment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <button
                        type="submit"
                        @click="updateSenior1Progress2()"
                        class="btn btn-primary mb-2 float-right"
                      >Update</button>
                    </form>
                  </div>
                </div>
              </div>
              <div v-if="item.data.progressType == 'Final Presentation' && item.data.seniorType == 'senior1'">
                <div class="col-md-9">
                  <h3
                    class="center"
                  >{{item.data.progressType}}</h3>
                  <div class="col-md-12">
                    <form class="form-group row">
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior1FinalPresentationAdvisorPoint"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee1 Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="text"
                          :value="senior1FinalPresentationCommittee1Point"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee2 Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior1FinalPresentationCommittee2Point"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Comment:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior1FinalPresentationAdvisorComment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee1 Comment:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="text"
                          :value="senior1FinalPresentationCommittee1Comment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee2 Comment:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior1FinalPresentationCommittee2Comment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        @click="updateSenior1FinalPresent()"
                        class="btn btn-primary mb-2 float-right"
                      >Update</button>
                    </form>
                  </div>
                </div>
              </div>
              <div v-if="item.data.progressType == 'Final Documentation' && item.data.seniorType == 'senior1'">
                <div class="col-md-9">
                  <h3
                    class="center"
                  >{{item.data.progressType}}</h3>
                  <div class="col-md-12">
                    <form class="form-group row">
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior1FinalDocumentAdvisorPoint"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee1 Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="text"
                          :value="senior1FinalDocumentationCommittee1Point"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee2 Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior1FinalDocumentationCommittee2Point"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Comment:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior1FinalDocumentationAdvisorComment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee1 Comment:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="text"
                          :value="senior1FinalDocumentationCommittee1Comment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee2 Comment:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior1FinalDocumentationCommittee2Comment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        @click="updateSenior1FinalDocument()"
                        class="btn btn-primary mb-2 float-right"
                      >Update</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row"
              v-if="projectProgress.filter(item => item.data.seniorType.includes('senior1') && item.data.progressType.includes('progress1')).length > 0"
            >
              
            </div>
            <div v-else>
              <div class="col-md-12">
                <h1>
                  <CIcon name="cil-ban" style="color:red;" height="30" />Student have not yet submitted Progress1 document!
                </h1>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <hr />
            </div>
            <div
              class="row"
              v-if="projectProgress.filter(item => item.data.seniorType.includes('senior1') && item.data.progressType.includes('progress2')).length > 0"
            >
              
            </div>
            <div v-else>
              <div class="col-md-12">
                <h1>
                  <CIcon name="cil-ban" style="color:red;" height="30" />Student have not yet submitted Progress2 document!
                </h1>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <hr />
            </div>
            <div
              class="row"
              v-if="projectProgress.filter(item => item.data.seniorType.includes('senior1') && item.data.progressType.includes('Final Presentation')).length > 0"
            >
              
            </div>
            <div v-else>
              <div class="col-md-12">
                <h1>
                  <CIcon name="cil-ban" style="color:red;" height="30" />Student have not yet submitted final presentation document!
                </h1>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <hr />
            </div>
            <div
              class="row"
              v-if="projectProgress.filter(item => item.data.seniorType.includes('senior1') && item.data.progressType.includes('Final Documentation')).length > 0"
            >
              
            </div>
            <div v-else>
              <div class="col-md-12">
                <h1>
                  <CIcon name="cil-ban" style="color:red;" height="30" />Student have not yet submitted final document document!
                </h1>
              </div>
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
              <small class="text-muted"></small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <div class="container">
            <div class="row" v-for="item in projectProgress.filter(item => item.data.seniorType.includes('senior2'))" :key="item.id">
              <div class="col-md-3">
                <img
                  alt="PDF file"
                  src="data:image/png;base64,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"
                  style="width:100px;"
                />
                <button
                  class="btn btn-primary btn-block"
                  @click="downloadProgress2(item.data.fileName)"
                >Download file</button>
              </div>
              <div v-if="item.data.progressType == 'progress1' && item.data.seniorType == 'senior2'">
                <div class="col-md-9">
                  <h3
                    class="center"
                  >{{item.data.progressType}}</h3>
                  <div class="col-md-12">
                    <form class="form-group row">
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior2Progress1AdvisorPoint"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Comment: </label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="text"
                          :value="senior2Progress1AdvisorComment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <button
                        type="submit"
                        @click="updateSenior2Progress1()"
                        class="btn btn-primary mb-2 float-right"
                      >Update</button>
                    </form>
                  </div>
                </div>
              </div>
              <div v-if="item.data.progressType == 'progress2' && item.data.seniorType == 'senior2'">
                <div class="col-md-9">
                  <h3
                    class="center"
                  >{{item.data.progressType}}</h3>
                  <div class="col-md-12">
                    <form class="form-group row">
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior2Progress2AdvisorPoint"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Comment: </label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="text"
                          :value="senior2Progress2AdvisorComment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <button
                        type="submit"
                        @click="updateSenior2Progress2()"
                        class="btn btn-primary mb-2 float-right"
                      >Update</button>
                    </form>
                  </div>
                </div>
              </div>
              <div v-if="item.data.progressType == 'Final Presentation' && item.data.seniorType == 'senior2'">
                <div class="col-md-9">
                  <h3
                    class="center"
                  >{{item.data.progressType}}</h3>
                  <div class="col-md-12">
                    <form class="form-group row">
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior2FinalPresentationAdvisorPoint"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee1 Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="text"
                          :value="senior2FinalPresentationCommittee1Point"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee2 Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior2FinalPresentationCommittee2Point"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Comment:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior2FinalPresentationAdvisorComment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee1 Comment:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="text"
                          :value="senior2FinalPresentationCommittee1Comment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee2 Comment:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior2FinalPresentationCommittee2Comment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        @click="updateSenior2FinalPresent()"
                        class="btn btn-primary mb-2 float-right"
                      >Update</button>
                    </form>
                  </div>
                </div>
              </div>
              <div v-if="item.data.progressType == 'Final Documentation' && item.data.seniorType == 'senior2'">
                <div class="col-md-9">
                  <h3
                    class="center"
                  >{{item.data.progressType}}</h3>
                  <div class="col-md-12">
                    <form class="form-group row">
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior2FinalDocumentAdvisorPoint"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee1 Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="text"
                          :value="senior2FinalDocumentationCommittee1Point"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee2 Point:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior2FinalDocumentationCommittee2Point"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Advisor Comment:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior2FinalDocumentationAdvisorComment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee1 Comment:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="text"
                          :value="senior2FinalDocumentationCommittee1Comment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Committee2 Comment:</label>
                      <div class="col-sm-10" style="margin-bottom:10px;">
                        <input
                          type="number"
                          v-model="senior2FinalDocumentationCommittee2Comment"
                          class="form-control"
                          id="colFormLabel"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        @click="updateSenior2FinalDocument()"
                        class="btn btn-primary mb-2 float-right"
                      >Update</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row"
              v-if="projectProgress.filter(item => item.data.seniorType.includes('senior2') && item.data.progressType.includes('progress1')).length > 0"
            >
              
            </div>
            <div v-else>
              <div class="col-md-12">
                <h1>
                  <CIcon name="cil-ban" style="color:red;" height="30" />Student have not yet submitted Progress1 document!
                </h1>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <hr />
            </div>
            <div
              class="row"
              v-if="projectProgress.filter(item => item.data.seniorType.includes('senior2') && item.data.progressType.includes('progress2')).length > 0"
            >
              
            </div>
            <div v-else>
              <div class="col-md-12">
                <h1>
                  <CIcon name="cil-ban" style="color:red;" height="30" />Student have not yet submitted Progress2 document!
                </h1>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <hr />
            </div>
            <div
              class="row"
              v-if="projectProgress.filter(item => item.data.seniorType.includes('senior2') && item.data.progressType.includes('Final Presentation')).length > 0"
            >
              
            </div>
            <div v-else>
              <div class="col-md-12">
                <h1>
                  <CIcon name="cil-ban" style="color:red;" height="30" />Student have not yet submitted final presentation document!
                </h1>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <hr />
            </div>
            <div
              class="row"
              v-if="projectProgress.filter(item => item.data.seniorType.includes('senior2') && item.data.progressType.includes('Final Documentation')).length > 0"
            >
              
            </div>
            <div v-else>
              <div class="col-md-12">
                <h1>
                  <CIcon name="cil-ban" style="color:red;" height="30" />Student have not yet submitted final document document!
                </h1>
              </div>
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

      senior1Progress1AdvisorPoint: 0,
      senior1Progress1Committee1Point: 0,
      senior1Progress1Committee2Point: 0,
      senior1Progress2AdvisorPoint: 0,
      senior1Progress2Committee1Point: 0,
      senior1Progress2Committee2Point: 0,
      senior1FinalPresentationAdvisorPoint: 0,
      senior1FinalPresentationCommittee1Point: 0,
      senior1FinalPresentationCommittee2Point: 0,
      senior1FinalDocumentationAdvisorPoint: 0,
      senior1FinalDocumentationCommittee1Point: 0,
      senior1FinalDocumentationCommittee2Point: 0,

      senior1Progress1AdvisorComment: "",
      senior1Progress1Committee1Comment: "",
      senior1Progress1Committee2Comment: "",
      senior1Progress2AdvisorComment: "",
      senior1Progress2Committee1Comment: "",
      senior1Progress2Committee2Comment: "",
      senior1FinalPresentationAdvisorComment: "",
      senior1FinalPresentationCommittee1Comment: "",
      senior1FinalPresentationCommittee2Comment: "",
      senior1FinalDocumentationAdvisorComment: "",
      senior1FinalDocumentationCommittee1Comment: "",
      senior1FinalDocumentationCommittee2Comment: "",

      senior1Progress1DocumentStatus: "",
      senior1Progress2DocumentStatus: "",
      senior1FinalPresentationDocumentStatus: "",
      senior1FinalDocumentationDocumentStatus: "",

      senior2Progress1AdvisorPoint: 0,
      senior2Progress1Committee1Point: 0,
      senior2Progress1Committee2Point: 0,
      senior2Progress2AdvisorPoint: 0,
      senior2Progress2Committee1Point: 0,
      senior2Progress2Committee2Point: 0,
      senior2FinalPresentationAdvisorPoint: 0,
      senior2FinalPresentationCommittee1Point: 0,
      senior2FinalPresentationCommittee2Point: 0,
      senior2FinalDocumentationAdvisorPoint: 0,
      senior2FinalDocumentationCommittee1Point: 0,
      senior2FinalDocumentationCommittee2Point: 0,

      senior2Progress1AdvisorComment: "",
      senior2Progress1Committee1Comment: "",
      senior2Progress1Committee2Comment: "",
      senior2Progress2AdvisorComment: "",
      senior2Progress2Committee1Comment: "",
      senior2Progress2Committee2Comment: "",
      senior2FinalPresentationAdvisorComment: "",
      senior2FinalPresentationCommittee1Comment: "",
      senior2FinalPresentationCommittee2Comment: "",
      senior2FinalDocumentationAdvisorComment: "",
      senior2FinalDocumentationCommittee1Comment: "",
      senior2FinalDocumentationCommittee2Comment: "",

      senior2Progress1DocumentStatus: "",
      senior2Progress2DocumentStatus: "",
      senior2FinalPresentationDocumentStatus: "",
      senior2FinalDocumentationDocumentStatus: "",

      senior1Progress1DocId: "",
      senior1Progress2DocId: "",
      senior1FinalPresentationDocId: "",
      senior1FinalDocumentationDocId: "",
      senior2Progress1DocId: "",
      senior2Progress2DocId: "",
      senior2FinalPresentationDocId: "",
      senior2FinalDocumentationDocId: "",

      totalPoint: 0,
      status3: "",
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
              projectType: doc.data().projectType,
              projectDuration: doc.data().projectDuration,
              projectPoint: doc.data().projectPoint,
              projectStatus: doc.data().projectStatus,
            });
          }
          console.log(this.projects);
        });
        return this.projects;
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
            if (doc.data().progressType == 'progress1' && doc.data().seniorType == 'senior1') {
            this.senior1Progress1AdvisorPoint = doc.data().advisorPoint;
            this.senior1Progress1AdvisorComment = doc.data().advisorComment;
            this.senior1Progress1DocumentStatus = doc.data().documentStatus;  
            } else if (doc.data().progressType == 'progress2' && doc.data().seniorType == 'senior1') {
            this.senior1Progress2AdvisorPoint = doc.data().advisorPoint;
            this.senior1Progress2AdvisorComment = doc.data().advisorComment;
            this.senior1Progress2DocumentStatus = doc.data().documentStatus;  
            } else if (doc.data().progressType == 'Final Presentation' && doc.data().seniorType == 'senior1') {
            this.senior1FinalPresentationAdvisorPoint = doc.data().advisorPoint;
            this.senior1FinalPresentationAdvisorComment = doc.data().advisorComment;
            this.senior1FinalPresentationCommittee1Point = doc.data().committee1Point;
            this.senior1FinalPresentationCommittee1Comment = doc.data().committee1Comment;
            this.senior1FinalPresentationCommiteee2Point = doc.data().committee2Point;
            this.senior1FinalPresentationCommittee2Comment = doc.data().committee2COmment;
            this.senior1FinalPresentationDocumentStatus = doc.data().documentStatus;  
            } else if (doc.data().progressType == 'Final Documentation' && doc.data().seniorType == 'senior1') {
            this.senior1FinalDocumentationAdvisorPoint = doc.data().advisorPoint;
            this.senior1FinalDocumentationAdvisorComment = doc.data().advisorComment;
            this.senior1FinalDocumentationCommittee1Point = doc.data().committee1Point;
            this.senior1FinalDocumentationCommittee1Comment = doc.data().committee1Comment;
            this.senior1FinalDocumentationCommittee2Point = doc.data().committee2Point;
            this.senior1FinalDocumentationCommittee2Comment = doc.data().committee2Comment;
            this.senior1FinalDocumentationDocumentStatus = doc.data().documentStatus;  
            } else if (doc.data().progressType == 'progress1' && doc.data().seniorType == 'senior2') {
            this.senior1FinalDocumentationAdvisorPoint = doc.data().advisorPoint;
            this.senior1Progress1AdvisorComment = doc.data().advisorComment;
            this.senior1Progress1DocumentStatus = doc.data().documentStatus;  
            } else if (doc.data().progressType == 'progress2' && doc.data().seniorType == 'senior2') {
            this.senior1FinalDocumentationAdvisorPoint = doc.data().advisorPoint;
            this.senior1Progress1AdvisorComment = doc.data().advisorComment;
            this.senior1Progress1DocumentStatus = doc.data().documentStatus;  
            } else if (doc.data().progressType == 'Final Presentation' && doc.data().seniorType == 'senior2') {
            this.senior2FinalPresentationAdvisorPoint = doc.data().advisorPoint;
            this.senior2FinalPresentationAdvisorComment = doc.data().advisorComment;
            this.seniore2FinalPresentationCommittee1Point = doc.data().committee1Point;
            this.senior2FinalPresentationCommittee1Comment = doc.data().committee1Comment;
            this.senior2FinalPresentationCommiteee2Point = doc.data().committee2Point;
            this.senior2FinalPresentationCommittee2Comment = doc.data().committee2COmment;
            this.senior2FinalPresentationDocumentStatus = doc.data().documentStatus;  
            } else if (doc.data().progressType == 'Final Documentation' && doc.data().seniorType == 'senior2') {
            this.senior2FinalDocumentationAdvisorPoint = doc.data().advisorPoint;
            this.senior2FinalDocumentationAdvisorComment = doc.data().advisorComment;
            this.senior2FinalDocumentationCommittee1Point = doc.data().committee1Point;
            this.senior2FinalDocumentationCommittee1Comment = doc.data().committee1Comment;
            this.senior2FinalDocumentationCommittee2Point = doc.data().committee2Point;
            this.senior2FinalDocumentationCommittee2Comment = doc.data().committee2Comment;
            this.senior2FinalDocumentationDocumentStatus = doc.data().documentStatus;  
            }
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
    downloadFile() {
      // Create a root reference
      var storageRef = firebase.storage().ref();

      storageRef
        .child(this.projects[0].projectFileName)
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
    updateProgress(
      id,
      advisorPoint,
      committee1Point,
      committee2Point,
      advisorComment,
      committee1Comment,
      committee2Comment
    ) {
      if(id&&
      advisorPoint&&
      committee1Point&&
      committee2Point&&
      advisorComment&&
      committee1Comment&&
      committee2Comment) {
db.collection("projectProgress").doc(id).update({
                advisorComment: advisorComment,
                committee1Comment: committee1Comment,
                committee2Comment: committee2Comment,
                advisorPoint: advisorPoint,
                committee1Point: committee1Point,
                committee2Point: committee2Point,
                createdAt: new Date(),
              }).then(alert("Update success")).catch((error) => {
          console.log("Error getting documents: ", error);
        });
      }
    },
    testUpdate() {
      window.alert('test update progress')
    },
    updateProject() {
      this.totalPoint = 0;
      this.totalPoint =
        parseInt(
          this.projectProgress[0].progressPoint
            ? this.projectProgress[0].progressPoint
            : 0
        ) +
        parseInt(
          this.projectProgress[1].progressPoint
            ? this.projectProgress[1].progressPoint
            : 0
        ) +
        parseInt(this.finalPresent[0].point ? this.finalPresent[0].point : 0) +
        parseInt(this.finalDocument[0].point ? this.finalDocument[0].point : 0);
      db.collection("projects")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.id == this.projects[0].id) {
              db.collection("projects").doc(doc.id).update({
                projectPoint: this.totalPoint,
                projectStatus: this.projectStatus,
                createdAt: new Date(),
              });
            }
          });
          alert("Update success");
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    updateSenior1Progress1() {
      db.collection("projectProgress")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (
             this.projectProgress.filter(item => item.id.includes(doc.id)).length >0 &&
              doc.data().seniorType == "senior1" &&
              doc.data().progressType == "progress1"
            ) {
              db.collection("projectProgress").doc(doc.id).update({
                advisorComment: this.senior1Progress1AdvisorComment,
                advisorPoint: this.senior1Progress1AdvisorPoint,
                createdAt: new Date(),
              });
            }
          });
          alert("Update success");
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    updateSenior1Progress2() {
      db.collection("projectProgress")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (
              this.projectProgress.filter(item => item.id.includes(doc.id)).length >0 &&
              doc.data().seniorType == "senior1" &&
              doc.data().progressType == "progress2"
            ) {
              db.collection("projectProgress").doc(doc.id).update({
                advisorComment: this.senior1Progress2AdvisorComment,
                advisorPoint: this.senior1Progress2AdvisorPoint,
                createdAt: new Date(),
              });
            }
          });
          alert("Update success");
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    updateSenior1FinalPresent() {
      db.collection("projectProgress")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (
              this.projectProgress.filter(item => item.id.includes(doc.id)).length >0 &&
              doc.data().seniorType == "senior1" &&
              doc.data().progressType == "Final Presentation"
            ) {
              db.collection("projectProgress").doc(doc.id).update({
                advisorComment: this.senior1FinalPresentationAdvisorComment,
                advisorPoint: this.senior1FinalPresentationAdvisorPoint,
                committee1Comment: this.senior1FinalPresentationCommittee1Comment,
                committee1Point: this.senior1FinalPresentationCommittee1Point,
                committee2Comment: this.senior1FinalPresentationCommittee2Comment,
                committee2Point: this.senior1FinalPresentationCommittee2Point,
                createdAt: new Date(),
              });
            }
          });
          alert("Update success");
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    updateSenior1FinalDocument() {
      db.collection("projectProgress")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (
              this.projectProgress.filter(item => item.id.includes(doc.id)).length >0 &&
              doc.data().seniorType == "senior1" &&
              doc.data().progressType == "Final Document"
            ) {
              db.collection("projectProgress").doc(doc.id).update({
                advisorComment: this.senior1FinalDocumentationAdvisorComment,
                advisorPoint: this.senior1FinalDocumentationAdvisorPoint,
                committee1Comment: this.senior1FinalDocumentationCommittee1Comment,
                committee1Point: this.senior1FinalPresentationCommittee1Point,
                committee2Comment: this.senior1FinalDocumentationCommittee2Comment,
                committee2Point: this.senior1FinalDocumentationCommittee2Point,
                createdAt: new Date(),
              });
            }
          });
          alert("Update success");
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
       updateSenior2Progress1() {
      db.collection("projectProgress")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (
             this.projectProgress.filter(item => item.id.includes(doc.id)).length >0 &&
              doc.data().seniorType == "senior2" &&
              doc.data().progressType == "progress1"
            ) {
              db.collection("projectProgress").doc(doc.id).update({
                advisorComment: this.senior2Progress1AdvisorComment,
                advisorPoint: this.senior2Progress1AdvisorPoint,
                createdAt: new Date(),
              });
            }
          });
          alert("Update success");
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    updateSenior2Progress2() {
      db.collection("projectProgress")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (
              this.projectProgress.filter(item => item.id.includes(doc.id)).length >0 &&
              doc.data().seniorType == "senior2" &&
              doc.data().progressType == "progress2"
            ) {
              db.collection("projectProgress").doc(doc.id).update({
                advisorComment: this.senior2Progress2AdvisorComment,
                advisorPoint: this.senior2Progress2AdvisorPoint,
                createdAt: new Date(),
              });
            }
          });
          alert("Update success");
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    updateSenior2FinalPresent() {
      db.collection("projectProgress")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (
              this.projectProgress.filter(item => item.id.includes(doc.id)).length >0 &&
              doc.data().seniorType == "senior2" &&
              doc.data().progressType == "Final Presentation"
            ) {
              db.collection("projectProgress").doc(doc.id).update({
                advisorComment: this.senior2FinalPresentationAdvisorComment,
                advisorPoint: this.senior2FinalPresentationAdvisorPoint,
                committee1Comment: this.senior2FinalPresentationCommittee1Comment,
                committee1Point: this.senior2FinalPresentationCommittee1Point,
                committee2Comment: this.senior2FinalPresentationCommittee2Comment,
                committee2Point: this.senior2FinalPresentationCommittee2Point,
                createdAt: new Date(),
              });
            }
          });
          alert("Update success");
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    updateSenior2FinalDocument() {
      db.collection("projectProgress")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (
              this.projectProgress.filter(item => item.id.includes(doc.id)).length >0 &&
              doc.data().seniorType == "senior2" &&
              doc.data().progressType == "Final Document"
            ) {
              db.collection("projectProgress").doc(doc.id).update({
                advisorComment: this.senior2FinalDocumentationAdvisorComment,
                advisorPoint: this.senior2FinalDocumentationAdvisorPoint,
                committee1Comment: this.senior2FinalDocumentationCommittee1Comment,
                committee1Point: this.senior2FinalPresentationCommittee1Point,
                committee2Comment: this.senior2FinalDocumentationCommittee2Comment,
                committee2Point: this.senior2FinalDocumentationCommittee2Point,
                createdAt: new Date(),
              });
            }
          });
          alert("Update success");
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
