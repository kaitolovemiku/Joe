<template>
  <CRow>
    <CCol col>
      <h2 v-if="!haveProjectOrNot">
        You have no project yet, pleace upload your project!
      </h2>
      <CCard v-if="haveProjectOrNot">
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong>Project Details</strong>
          <div class="card-header-actions">
            <CButton size="sm" @click="editProject()" color="warning" block>
              <i class="fa fa-pen"></i>
              {{ checkEditProject ? "Discard post" : "Edit project details" }}
            </CButton>
          </div>
        </CCardHeader>
        <CCardBody>
          <div class="container">
            <div class="row" v-if="!checkEditProject">
              <div class="col-md-3">
                <img
                  alt="PDF file"
                  src="data:image/png;base64,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"
                />
                <div class="row">
                  <div class="col-md-12" style="margin-top: 10px">
                    <button
                      class="btn btn-primary btn-block"
                      v-on:click="downloadFile()"
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
                  {{ project.projectNameEn }}({{ project.projectNameTh }})
                </h1>
                <div class="row">
                  <div class="col-md-12">
                    <form>
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
                        <div class="col-sm-9">
                          <div class="row">
                            <div
                              class="col-sm-4"
                              v-for="item in project.projectAdvisor"
                              :key="item"
                            >
                              <p>{{ item }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Co-Advisor:</label
                        >
                        <div class="col-sm-9">
                          <div class="row">
                            <div
                              class="col-sm-4"
                              v-for="item in project.projectCoAdvisor"
                              :key="item"
                            >
                              <p>{{ item }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Committee:</label
                        >
                        <div class="col-sm-9">
                          <div class="row">
                            <div
                              class="col-sm-4"
                              v-for="item in project.projectCommittee"
                              :key="item"
                            >
                              <p>{{ item }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Project Member:</label
                        >
                        <div class="col-sm-9">
                          <div class="row">
                            <div
                              class="col-sm-4"
                              v-for="item in project.projectMember"
                              :key="item"
                            >
                              <p>{{ item }}</p>
                            </div>
                          </div>
                        </div>
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
                          >Senior Project 1 Status:</label
                        >
                        <div class="col-sm-9">
                          {{ project.projectStatusSemester1 }}
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label"
                          >Senior Project 2 Status:</label
                        >
                        <div class="col-sm-9">
                          {{ project.projectStatusSemester2 }}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-for="project in projects"
              v-bind:key="project.id"
              class="col-md-12"
            >
              <div class="row" v-if="checkEditProject">
                <div class="col-md-3">
                  <p for="projectName">Project Name (English)</p>
                </div>
                <div class="col-md-9 mb-3">
                  <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
                  <input
                    v-on:input="projectNameEn = $event.target.value"
                    :value="(projectNameEn = project.projectNameEn)"
                    type="text"
                    class="form-control"
                    id="projectNameEn"
                    placeholder="Enter your project name ..."
                    required
                  />
                </div>
                <div class="col-md-3">
                  <p for="projectName">Project Name (Thai)</p>
                </div>
                <div class="col-md-9 mb-3">
                  <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
                  <input
                    :value="(projectNameTh = project.projectNameTh)"
                    v-on:input="projectNameTh = $event.target.value"
                    type="text"
                    class="form-control"
                    id="projectNameTh"
                    placeholder="Enter your project name ..."
                    required
                  />
                </div>
                <div class="col-md-3 mb-3">
                  <p>Project Member</p>
                </div>
                <div class="col-md-9 mb-3">
                  <multiselect
                    id="projectMember"
                    placeholder="Don't forget to add your name before add your friend."
                    v-model="projectMember"
                    :options="
                      students.map((item) => {
                        return item.data;
                      })
                    "
                    :multiple="true"
                    :taggable="true"
                    @tag="addTag"
                  ></multiselect>
                </div>
                <div class="col-md-3 mb-3">
                  <p>Project Description</p>
                </div>
                <div class="col-md-9 mb-3">
                  <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
                  <textarea
                    class="form-control"
                    :value="(projectBg = project.projectBg)"
                    v-on:input="projectBg = $event.target.value"
                    label="Project description"
                    placeholder="Content..."
                    horizontal
                    rows="9"
                  />
                </div>
                <div class="col-md-3 mb-3">
                  <p>Proeject Advisor</p>
                </div>
                <div class="col-md-9 mb-3">
                  <multiselect
                    placeholder="Search or add a advisor ..."
                    v-model="projectAdvisor"
                    :options="
                      teachers.map((item) => {
                        return item.data;
                      })
                    "
                    :multiple="true"
                    :taggable="true"
                    @tag="addTag"
                  ></multiselect>
                </div>
                <div class="col-md-3 mb-3">
                  <p>Proeject Co-Advisor</p>
                </div>
                <div class="col-md-9 mb-3">
                  <multiselect
                    placeholder="Search or add a co-advisor ..."
                    v-model="projectCoAdvisor"
                    :options="
                      teachers.map((item) => {
                        return item.data;
                      })
                    "
                    :multiple="true"
                    :taggable="true"
                    @tag="addTag"
                  ></multiselect>
                </div>
                <div class="col-md-3 mb-3">
                  <p>Proeject Advisor</p>
                </div>
                <div class="col-md-9 mb-3">
                  <multiselect
                    placeholder="Search or add a committee ..."
                    v-model="projectCommittee"
                    :options="
                      teachers.map((item) => {
                        return item.data;
                      })
                    "
                    :multiple="true"
                    :taggable="true"
                    @tag="addTag"
                  ></multiselect>
                </div>
                <div class="col-md-3 mb-3">
                  <p>Project Type</p>
                </div>
                <div class="col-md-9 mb-3">
                  <multiselect
                    v-model="projectType"
                    :options="[
                      'E-commerce',
                      'Education',
                      'POS',
                      'Marketing',
                      'IOT',
                      'Love',
                      'House & Building',
                      'Car care',
                      'Movie',
                      'Music',
                    ]"
                  ></multiselect>
                </div>
                <div class="col-md-3 mb-3">
                  <p for="validationServer03">Project Duration (start date)</p>
                </div>
                <div class="col-md-9 mb-3">
                  <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
                  <input
                    :value="
                      (projectDStart = project.projectDuration.substring(0, 10))
                    "
                    v-on:input="projectDStart = $event.target.value"
                    type="date"
                    class="form-control"
                    id="projectDStart"
                    required
                  />
                </div>
                <div class="col-md-3 mb-3">
                  <p for="validationServer03">Project Duration (end date)</p>
                </div>
                <div class="col-md-9 mb-3">
                  <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
                  <input
                    :value="
                      (projectDEnd = project.projectDuration.substring(13, 23))
                    "
                    v-on:input="projectDEnd = $event.target.value"
                    type="date"
                    class="form-control"
                    id="projectDEnd"
                    required
                  />
                </div>
                <div class="col-md-3 mb-3">
                  <p for="validationServer03">Proeject File</p>
                </div>
                <div class="col-md-9 mb-3">
                  <!-- put css  ' is-invalid ' to be red color , put css ' is-valid ' to be green color -->
                  <input
                    type="file"
                    class="form-control"
                    @change="previewFile"
                    id="projectFile"
                    placeholder="City"
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <p>Progress: {{ uploadValue.toFixed() + "%" }}</p>
                </div>
                <div class="col-md-9 mb-3">
                  <CProgress
                    :value="uploadValue"
                    :max="100"
                    show-percentage
                    animated
                  ></CProgress>
                </div>
                <div class="col-md-12 mb-3">
                  <button
                    v-on:click="updateProject(project)"
                    class="btn btn-success btn-block"
                    type="button"
                  >
                    Update project details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CCardBody>
      </CCard>
      <CCard v-if="haveProjectOrNot">
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong>Upload project progress document (Senior 1)</strong>
          <div class="card-header-actions">
            <a
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
            <div class="row">
              <div class="col-md-12">
                <h3 class="center">
                  Upload your project progress document here!
                </h3>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <input
                    @change="previewFile"
                    type="file"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <select v-model="progressType">
                      <option
                        v-for="option in options"
                        v-bind:key="'option1' + option"
                      >
                        {{ option }}
                      </option>
                    </select>
                    <button
                      v-on:click="onUpload((seniorType = 'senior1'))"
                      class="btn btn-primary"
                      type="button"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <CCard>
                  <CCardHeader>
                    <CIcon name="cil-file" />
                    <strong>Progress documents (Senior 1)</strong>
                    <div class="card-header-actions">
                      <a
                        class="card-header-action"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <small class="text-muted"></small>
                      </a>
                    </div>
                  </CCardHeader>
                  <CCardBody>
                    <div
                      v-if="
                        projectProgress.filter(
                          (item) =>
                            item.seniorType === 'senior1' &&
                            item.progressType === 'progress1'
                        ).length > 0
                      "
                    >
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Progress 1"
                          aria-label="Progress 1"
                          aria-describedby="basiaddon2"
                          disabled
                        />
                        <div class="input-group-append">
                          <button
                            class="btn btn-danger"
                            type="button"
                            @click="
                              deleteProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior1' &&
                                    item.progressType === 'progress1'
                                )
                              )
                            "
                          >
                            Delete
                          </button>
                          <button
                            class="btn btn-primary"
                            type="button"
                            @click="
                              downloadProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior1' &&
                                    item.progressType === 'progress1'
                                )
                              )
                            "
                          >
                            Download file
                          </button>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Progress 1"
                          aria-label="Progress 1"
                          aria-describedby="basiaddon2"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text" id="basiaddon2"
                            >Has not yet been updated!</span
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      v-if="
                        projectProgress.filter(
                          (item) =>
                            item.seniorType === 'senior1' &&
                            item.progressType === 'progress2'
                        ).length > 0
                      "
                    >
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Progress 2"
                          aria-label="progress 2"
                          aria-describedby="basiaddon2"
                          disabled
                        />
                        <div class="input-group-append">
                          <button
                            class="btn btn-danger"
                            type="button"
                            @click="
                              deleteProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior1' &&
                                    item.progressType === 'progress2'
                                )
                              )
                            "
                          >
                            Delete
                          </button>
                          <button
                            class="btn btn-primary"
                            type="button"
                            @click="
                              downloadProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior1' &&
                                    item.progressType === 'progress2'
                                )
                              )
                            "
                          >
                            Download file
                          </button>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Progress 2"
                          aria-label="Progress 2"
                          aria-describedby="basiaddon2"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text" id="basiaddon2"
                            >Has not yet been updated!</span
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      v-if="
                        projectProgress.filter(
                          (item) =>
                            item.seniorType === 'senior1' &&
                            item.progressType === 'Final Presentation'
                        ).length > 0
                      "
                    >
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Final Presentation"
                          aria-label="Final Presentation"
                          aria-describedby="basiaddon2"
                          disabled
                        />
                        <div class="input-group-append">
                          <button
                            class="btn btn-danger"
                            type="button"
                            @click="
                              deleteProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior1' &&
                                    item.progressType === 'Final Presentation'
                                )
                              )
                            "
                          >
                            Delete
                          </button>
                          <button
                            class="btn btn-primary"
                            type="button"
                            @click="
                              downloadProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior1' &&
                                    item.progressType === 'Final Presentation'
                                )
                              )
                            "
                          >
                            Download file
                          </button>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Final Presentation"
                          aria-label="Final Presentation"
                          aria-describedby="basiaddon2"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text" id="basiaddon2"
                            >Has not yet been updated!</span
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      v-if="
                        projectProgress.filter(
                          (item) =>
                            item.seniorType === 'senior1' &&
                            item.progressType === 'Final Documentation'
                        ).length > 0
                      "
                    >
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Final Document"
                          aria-label="Final Document"
                          aria-describedby="basiaddon2"
                          disabled
                        />
                        <div class="input-group-append">
                          <button
                            class="btn btn-danger"
                            type="button"
                            @click="
                              deleteProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior1' &&
                                    item.progressType === 'Final Documentation'
                                )
                              )
                            "
                          >
                            Delete
                          </button>
                          <button
                            class="btn btn-primary"
                            type="button"
                            @click="
                              downloadProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior1' &&
                                    item.progressType === 'Final Documentation'
                                )
                              )
                            "
                          >
                            Download file
                          </button>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Final Document"
                          aria-label="Final Document"
                          aria-describedby="basiaddon2"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text" id="basiaddon2"
                            >Has not yet been updated!</span
                          >
                        </div>
                      </div>
                    </div>
                  </CCardBody>
                </CCard>
              </div>
              <div class="col-md-12">
                <CProgress
                  :value="uploadValue2"
                  :max="100"
                  show-percentage
                  animated
                ></CProgress>
              </div>
            </div>
          </div>
        </CCardBody>
      </CCard>
      <CCard v-if="haveProjectOrNot">
        <CCardHeader>
          <CIcon name="cil-justify-center" />
          <strong>Upload project progress document (Senior 2)</strong>
          <div class="card-header-actions">
            <a
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
            <div class="row">
              <div class="col-md-12">
                <h3 class="center">
                  Upload your project progress document here!
                </h3>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <input
                    @change="previewFile"
                    type="file"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <select v-model="progressType2">
                      <option
                        v-for="option in options2"
                        v-bind:key="'option2' + option"
                      >
                        {{ option }}
                      </option>
                    </select>
                    <button
                      v-on:click="onUpload2((seniorType = 'senior2'))"
                      class="btn btn-primary"
                      type="button"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <CCard>
                  <CCardHeader>
                    <CIcon name="cil-file" />
                    <strong>Progress documents (Senior 2)</strong>
                    <div class="card-header-actions">
                      <a
                        class="card-header-action"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <small class="text-muted"></small>
                      </a>
                    </div>
                  </CCardHeader>
                  <CCardBody>
                    <div
                      v-if="
                        projectProgress.filter(
                          (item) =>
                            item.seniorType === 'senior2' &&
                            item.progressType === 'progress1'
                        ).length > 0
                      "
                    >
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Progress 1"
                          aria-label="Progress 1"
                          aria-describedby="basiaddon2"
                          disabled
                        />
                        <div class="input-group-append">
                          <button
                            class="btn btn-danger"
                            type="button"
                            @click="
                              deleteProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior2' &&
                                    item.progressType === 'progress1'
                                )
                              )
                            "
                          >
                            Delete
                          </button>
                          <button
                            class="btn btn-primary"
                            type="button"
                            @click="
                              downloadProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior2' &&
                                    item.progressType === 'progress1'
                                )
                              )
                            "
                          >
                            Download file
                          </button>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Progress 1"
                          aria-label="Progress 1"
                          aria-describedby="basiaddon2"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text" id="basiaddon2"
                            >Has not yet been updated!</span
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      v-if="
                        projectProgress.filter(
                          (item) =>
                            item.seniorType === 'senior2' &&
                            item.progressType === 'progress2'
                        ).length > 0
                      "
                    >
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Progress 2"
                          aria-label="Progress 2"
                          aria-describedby="basiaddon2"
                          disabled
                        />
                        <div class="input-group-append">
                          <button
                            class="btn btn-danger"
                            type="button"
                            @click="
                              deleteProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior2' &&
                                    item.progressType === 'progress2'
                                )
                              )
                            "
                          >
                            Delete
                          </button>
                          <button
                            class="btn btn-primary"
                            type="button"
                            @click="
                              downloadProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior2' &&
                                    item.progressType === 'progress2'
                                )
                              )
                            "
                          >
                            Download file
                          </button>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Progress 2"
                          aria-label="Progress 2"
                          aria-describedby="basiaddon2"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text" id="basiaddon2"
                            >Has not yet been updated!</span
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      v-if="
                        projectProgress.filter(
                          (item) =>
                            item.seniorType === 'senior2' &&
                            item.progressType === 'Final Presentation'
                        ).length > 0
                      "
                    >
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Final Presentation"
                          aria-label="Final Presentation"
                          aria-describedby="basiaddon2"
                          disabled
                        />
                        <div class="input-group-append">
                          <button
                            class="btn btn-danger"
                            type="button"
                            @click="
                              deleteProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior2' &&
                                    item.progressType === 'Final Presentation'
                                )
                              )
                            "
                          >
                            Delete
                          </button>
                          <button
                            class="btn btn-primary"
                            type="button"
                            @click="
                              downloadProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior2' &&
                                    item.progressType === 'Final Presentation'
                                )
                              )
                            "
                          >
                            Download file
                          </button>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Final Presentation"
                          aria-label="Final Presentation"
                          aria-describedby="basiaddon2"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text" id="basiaddon2"
                            >Has not yet been updated!</span
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      v-if="
                        projectProgress.filter(
                          (item) =>
                            item.seniorType === 'senior2' &&
                            item.progressType === 'Final Documentation'
                        ).length > 0
                      "
                    >
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Final Document"
                          aria-label="Final Document"
                          aria-describedby="basiaddon2"
                          disabled
                        />
                        <div class="input-group-append">
                          <button
                            class="btn btn-danger"
                            type="button"
                            @click="
                              deleteProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior2' &&
                                    item.progressType === 'Final Documentation'
                                )
                              )
                            "
                          >
                            Delete
                          </button>
                          <button
                            class="btn btn-primary"
                            type="button"
                            @click="
                              downloadProgress(
                                projectProgress.filter(
                                  (item) =>
                                    item.seniorType === 'senior2' &&
                                    item.progressType === 'Final Documentation'
                                )
                              )
                            "
                          >
                            Download file
                          </button>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Final Document"
                          aria-label="Final Document"
                          aria-describedby="basiaddon2"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text" id="basiaddon2"
                            >Has not yet been updated!</span
                          >
                        </div>
                      </div>
                    </div>
                  </CCardBody>
                </CCard>
              </div>
              <div class="col-md-12">
                <CProgress
                  :value="uploadValue3"
                  :max="100"
                  show-percentage
                  animated
                ></CProgress>
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
import Multiselect from "vue-multiselect";
import Vue from "vue";

const db = firebase.firestore();

export default {
  name: "MyProject",
  components: {
    Multiselect,
  },
  data() {
    return {
      options: [
        "progress1",
        "progress2",
        "Final Presentation",
        "Final Documentation",
      ],
      options2: [
        "progress1",
        "progress2",
        "Final Presentation",
        "Final Documentation",
      ],
      projects: [],
      haveProjectOrNot: "",
      senior1Progress1: "",
      projectNameTh: "",
      projectNameEn: "",
      projectBg: "",
      uploadValue: 0,
      uploadValue2: 0,
      uploadValue3: 0,
      projectType: "",
      projectProgress: [],
      projectMember: "",
      memberName: [],
      checkEditProject: false,
      projectDStart: "",
      projectDEnd: "",
      projectAdvisor: [],
      projectCoAdvisor: [],
      projectCommittee: [],
      finalPresent: [],
      teachers: [],
      students: [],
      finalDocument: [],
      project: null,
      seniorType1: "",
      progressType: "progress1",
      progressType2: "progress1",
      projectStatusSemester1: "",
      projectStatusSemester2: "",
      projectFile: null,
    };
  },
  created() {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          return this.students.push({ id: doc.id, data: doc.data().username });
        });
      });
    db.collection("teachers")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          return this.teachers.push({
            id: doc.id,
            data: doc.data().teacherName,
          });
        });
      });
    db.collection("projects")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (
            doc.data().projectMember.find((item) => {
              return item == Vue.prototype.$session.getAll().user.id;
            })
          ) {
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
              projectFileName: doc.data().projectFileName,
              projectDuration: doc.data().projectDuration,
              projectPoint: doc.data().projectPoint,
              projectPointSP1: doc.data().projectPointSP1,
              projectPointSP2: doc.data().projectPointSP2,
              projectStatus: doc.data().projectStatus,
              projectStatusSemester1: doc.data().projectStatusSemester1,
              projectStatusSemester2: doc.data().projectStatusSemester2,
            });
            this.haveProjectOrNot = true;
          }
        });
        return (
          (this.projectType = this.projects[0].projectType),
          (this.projectMember = this.projects[0].projectMember),
          (this.projectAdvisor = this.projects[0].projectAdvisor),
          (this.projectCoAdvisor = this.projects[0].projectCoAdvisor),
          (this.projectCommittee = this.projects[0].projectCommittee),
          this.projects
        );
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    db.collection("projectProgress")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().projectId == this.projects[0].id) {
            this.projectProgress.push({
              id: doc.id,
              comment: doc.data().comment,
              fileName: doc.data().fileName,
              progressPoint: doc.data().progressPoint,
              progressType: doc.data().progressType,
              seniorType: doc.data().seniorType,
              projectId: doc.data().projectId,
              status: doc.data().status,
            });
          }
        });
        return this.projectProgress;
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    editProject() {
      this.checkEditProject === false
        ? (this.checkEditProject = true)
        : (this.checkEditProject = false);
    },
    deleteProgress(item) {
      if (window.confirm("Do you really want to delete this file?")) {
        db.collection("projectProgress")
          .doc(item[0].id)
          .delete()
          .catch((error) => {
            console.error(error);
          });
        // Create a root reference
        var storageRef = firebase.storage().ref();
        storageRef
          .child(item[0].fileName)
          .getDownloadURL()
          .then(function (url) {
            var ref = firebase.storage().refFromURL(url);
            ref
              .delete()
              .then(function () {
                window.alert("File deleted successfully");
                location.reload();
              })
              .catch(function (error) {
                window.alert("Sorry, " + error);
              });
          })
          .catch((error) => {
            console.log("Error getting files url: ", error);
          });
      }
    },
    downloadProgress(item) {
      // Create a root reference
      var storageRef = firebase.storage().ref();
      storageRef
        .child(item[0].fileName)
        .getDownloadURL()
        .then(function (url) {
          // `url` is the download URL for 'images/stars.jpg'
          window.open(url, "_blank");
        })
        .catch((error) => {
          console.log("Error getting files url: ", error);
        });
    },
    previewFile(e) {
      this.uploadValue = 0;
      this.project = null;
      this.projectFile = e.target.files[0];
    },
    previewFile1(e) {
      this.uploadValue2 = 0;
      this.project = null;
      this.projectFile = e.target.files[0];
    },
    previewFile2(e) {
      this.uploadValue3 = 0;
      this.project = null;
      this.projectFile = e.target.files[0];
    },
    downloadFile() {
      // Create a root reference
      var storageRef = firebase.storage().ref();

      storageRef
        .child(this.projects[0].projectFileName)
        .getDownloadURL()
        .then(function (url) {
          // `url` is the download URL for 'images/stars.jpg'
          window.open(url, "_blank");
        })
        .catch((error) => {
          console.log("Error getting files url: ", error);
        });
    },
    updateProject(item) {
      let data =
        this.projectFile !== null
          ? {
              createdAt: new Date(),
              projectAdvisor: this.teachers
                .filter((item) => this.projectAdvisor.includes(item.data))
                .map((item) => {
                  return item.id;
                }),
              projectCoAdvisor: this.teachers
                .filter((item) => this.projectCoAdvisor.includes(item.data))
                .map((item) => {
                  return item.id;
                }),
              projectCommittee: this.teachers
                .filter((item) => this.projectCommittee.includes(item.data))
                .map((item) => {
                  return item.id;
                }),
              projectMember: this.students
                .filter((item) => this.projectMember.includes(item.data))
                .map((item) => {
                  return item.id;
                }),
              projectBg: this.projectBg,
              projectDuration: this.projectDStart + " - " + this.projectDEnd,
              projectFileName: this.projectFile.name,
              projectType: this.projectType,
              projectNameEn: this.projectNameEn,
              projectNameTh: this.projectNameTh,
              projectPoint: 0,
              projectStatus: "Waiting for acception",
            }
          : {
              createdAt: new Date(),
              projectAdvisor: this.teachers
                .filter((item) => this.projectAdvisor.includes(item.data))
                .map((item) => {
                  return item.id;
                }),
              projectCoAdvisor: this.teachers
                .filter((item) => this.projectCoAdvisor.includes(item.data))
                .map((item) => {
                  return item.id;
                }),
              projectCommittee: this.teachers
                .filter((item) => this.projectCommittee.includes(item.data))
                .map((item) => {
                  return item.id;
                }),
              projectMember: this.students
                .filter((item) => this.projectMember.includes(item.data))
                .map((item) => {
                  return item.id;
                }),
              projectBg: this.projectBg,
              projectDuration: this.projectDStart + " - " + this.projectDEnd,
              projectNameEn: this.projectNameEn,
              projectType: this.projectType,
              projectNameTh: this.projectNameTh,
              projectPoint: 0,
              projectStatus: "Waiting for acception",
            };
      console.log("update data->", data, item);
      db.collection("projects")
        .doc(item.id)
        .update(data)
        .then(() => {
          if (this.projectFile === null) {
            window.alert("update success.");
          }
        })
        .catch((error) => {
          return "Sorry, save file error!!" + error;
        });
      if (this.projectFile !== null) {
        const ref = firebase
          .storage()
          .ref(`${this.projects[0].projectFileName}`);
        ref
          .delete()
          .then(function () {
            console.log("File deleted successfully!");
          })
          .catch(function (error) {
            console.log("Sorry, delete file fails." + error);
          });
        const storageRef = firebase
          .storage()
          .ref(`${this.projectFile.name}`)
          .put(this.projectFile);
        storageRef.on(
          `state_changed`,
          (snapshot) => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
          },
          () => {
            this.uploadValue = 100;
            location.reload();
          }
        );
      }
    },
    onUpload(seniorType) {
      // db.collection("projectProgress")
      //   .get()
      //   .then((querySnapshot) => {
      //     if (
      //       querySnapshot.map((doc) => {
      //         doc.data().projectId == this.projects[0].id &&
      //           doc.data().progressType == this.progressType &&
      //           doc.data().seniorType == seniorType;
      //       }).length > 1
      //     ) {
      //       db.collection("projectProgress").doc(querySnapshot=>{querySnapshot[0].id}).delete();
      //     }
      //   });
      db.collection("projectProgress")
        .add({
          projectId: this.projects[0].id,
          progressType: this.progressType,
          seniorType: seniorType,
          progressPoint: 0,
          status: "waiting for advisor acception",
          comment: "",
          fileName: this.projectFile.name,
          createdAt: new Date(),
        })
        .then(() => {
          console.log("Upload successed");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      const storageRef = firebase
        .storage()
        .ref(`${this.projectFile.name}`)
        .put(this.projectFile);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          if (seniorType == "senior1") {
            this.uploadValue2 =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          } else {
            this.uploadValue3 =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          }
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          window.alert("Upload success.");
          location.reload();
        }
      );
    },
    onUpload2(seniorType) {
      // db.collection("projectProgress")
      //   .get()
      //   .then((querySnapshot) => {
      //     if (
      //       querySnapshot.map((doc) => {
      //         doc.data().projectId == this.projects[0].id &&
      //           doc.data().progressType == this.progressType &&
      //           doc.data().seniorType == seniorType;
      //       }).length > 1
      //     ) {
      //       db.collection("projectProgress").doc(querySnapshot=>{querySnapshot[0].id}).delete();
      //     }
      //   });
      db.collection("projectProgress")
        .add({
          projectId: this.projects[0].id,
          progressType: this.progressType2,
          seniorType: seniorType,
          progressPoint: 0,
          status: "waiting for advisor acception",
          comment: "",
          fileName: this.projectFile.name,
          createdAt: new Date(),
        })
        .then(() => {
          console.log("Upload successed");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      if (this.progressType2 == "Final Documentation") {
        db.collection("projects")
          .doc(this.projects[0].id)
          .update({ projectFileName: this.projectFile.name });
      }
      const storageRef = firebase
        .storage()
        .ref(`${this.projectFile.name}`)
        .put(this.projectFile);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          if (seniorType == "senior1") {
            this.uploadValue2 =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          } else {
            this.uploadValue3 =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          }
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          window.alert("Upload success.");
          location.reload();
        }
      );
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>