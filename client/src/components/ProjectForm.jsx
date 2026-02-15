import { Plus, Trash2 } from "lucide-react";

const ProjectForm = ({ data, onChange }) => {

  // ✅ Update Main Projects Page Link
  const updateProjectsPageLink = (value) => {
    onChange({
      ...data,
      projectsPageLink: value,
    });
  };

  // ✅ Add Project
  const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      description: "",
    };

    onChange({
      ...data,
      project: [...data.project, newProject],
    });
  };

  // ✅ Remove Project
  const removeProject = (index) => {
    const updatedProjects = data.project.filter((_, i) => i !== index);

    onChange({
      ...data,
      project: updatedProjects,
    });
  };

  // ✅ Update Project Field
  const updateProject = (index, field, value) => {
    const updatedProjects = [...data.project];

    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };

    onChange({
      ...data,
      project: updatedProjects,
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Projects
          </h3>
          <p className="text-sm text-gray-500">
            Add your projects details
          </p>
        </div>

        <button
          type="button"
          onClick={addProject}
          className="flex items-center gap-2 px-3 py-2 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
        >
          <Plus className="size-4" />
          Add Project
        </button>
      </div>

      {/* ✅ MAIN LIVE DEPLOYMENT LINK */}
      <div className="mt-4">
        <input
          value={data.projectsPageLink || ""}
          onChange={(e) => updateProjectsPageLink(e.target.value)}
          type="url"
          placeholder="Main Live Deployment Link (All Projects Page)"
          className="px-3 py-2 text-sm rounded-lg w-full border border-gray-300"
        />
      </div>

      <div className="space-y-4 mt-6">
        {data.project?.map((project, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg space-y-3"
          >
            <div className="flex justify-between items-start">
              <h4>Project #{index + 1}</h4>

              <button
                type="button"
                className="text-red-500 hover:text-red-700 transition-colors"
                onClick={() => removeProject(index)}
              >
                <Trash2 className="size-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                value={project.name || ""}
                onChange={(e) =>
                  updateProject(index, "name", e.target.value)
                }
                type="text"
                placeholder="Project Name"
                className="px-3 py-2 text-sm rounded-lg border border-gray-300"
              />

              <input
                value={project.type || ""}
                onChange={(e) =>
                  updateProject(index, "type", e.target.value)
                }
                type="text"
                placeholder="Project Type"
                className="px-3 py-2 text-sm rounded-lg border border-gray-300"
              />
            </div>

            <textarea
              value={project.description || ""}
              onChange={(e) =>
                updateProject(index, "description", e.target.value)
              }
              rows={4}
              placeholder="Describe your project..."
              className="px-3 py-2 text-sm rounded-lg resize-none w-full border border-gray-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectForm;
