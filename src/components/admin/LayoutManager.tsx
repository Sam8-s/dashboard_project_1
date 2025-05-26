import React, { useState } from 'react';
import { Check, Edit, Plus, X, ArrowUp, ArrowDown, ExternalLink } from 'lucide-react';
import { LayoutSection, mockLayoutSections } from '../../lib/mockData';
import Button from '../common/Button';

const LayoutManager: React.FC = () => {
  const [sections, setSections] = useState<LayoutSection[]>(mockLayoutSections);
  const [editingSection, setEditingSection] = useState<LayoutSection | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleActive = (id: string) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, active: !section.active } : section
      )
    );
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newSections = [...sections];
    [newSections[index - 1], newSections[index]] = [newSections[index], newSections[index - 1]];
    
    // Update order values
    newSections[index - 1].order = index;
    newSections[index].order = index + 1;
    
    setSections(newSections);
  };

  const handleMoveDown = (index: number) => {
    if (index === sections.length - 1) return;
    const newSections = [...sections];
    [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];
    
    // Update order values
    newSections[index].order = index + 1;
    newSections[index + 1].order = index + 2;
    
    setSections(newSections);
  };

  const handleEditSection = (section: LayoutSection) => {
    setEditingSection({ ...section });
    setIsEditing(true);
  };

  const handleSaveSection = () => {
    if (!editingSection) return;
    
    setSections(
      sections.map((section) =>
        section.id === editingSection.id ? editingSection : section
      )
    );
    
    setIsEditing(false);
    setEditingSection(null);
  };

  const handleSettingChange = (key: string, value: any) => {
    if (!editingSection) return;
    
    setEditingSection({
      ...editingSection,
      settings: {
        ...editingSection.settings,
        [key]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-serif font-semibold">Manage Layout Sections</h3>
        <Button variant="primary" className="flex items-center">
          <Plus size={16} className="mr-1" />
          Add Section
        </Button>
      </div>
      
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="grid grid-cols-10 gap-4 px-6 py-3 bg-neutral-100 font-medium text-sm text-neutral-600">
          <div className="col-span-3">Section Name</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-3">Actions</div>
        </div>
        
        {sections.map((section, index) => (
          <div 
            key={section.id}
            className="grid grid-cols-10 gap-4 px-6 py-4 border-t border-neutral-200 items-center"
          >
            <div className="col-span-3 font-medium">{section.name}</div>
            <div className="col-span-2 capitalize">{section.type}</div>
            <div className="col-span-2">
              <span 
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  section.active
                    ? 'bg-success-100 text-success-800'
                    : 'bg-neutral-100 text-neutral-800'
                }`}
              >
                {section.active ? 'Active' : 'Inactive'}
              </span>
            </div>
            <div className="col-span-3 flex space-x-2">
              <button
                onClick={() => handleToggleActive(section.id)}
                className={`p-1.5 rounded-md text-white ${
                  section.active ? 'bg-error-500 hover:bg-error-600' : 'bg-success-500 hover:bg-success-600'
                }`}
                title={section.active ? 'Deactivate' : 'Activate'}
              >
                {section.active ? <X size={16} /> : <Check size={16} />}
              </button>
              
              <button
                onClick={() => handleEditSection(section)}
                className="p-1.5 rounded-md bg-primary-500 hover:bg-primary-600 text-white"
                title="Edit Section"
              >
                <Edit size={16} />
              </button>
              
              <button
                onClick={() => handleMoveUp(index)}
                disabled={index === 0}
                className={`p-1.5 rounded-md ${
                  index === 0
                    ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                    : 'bg-secondary-500 hover:bg-secondary-600 text-neutral-900'
                }`}
                title="Move Up"
              >
                <ArrowUp size={16} />
              </button>
              
              <button
                onClick={() => handleMoveDown(index)}
                disabled={index === sections.length - 1}
                className={`p-1.5 rounded-md ${
                  index === sections.length - 1
                    ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                    : 'bg-secondary-500 hover:bg-secondary-600 text-neutral-900'
                }`}
                title="Move Down"
              >
                <ArrowDown size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Section Edit Modal */}
      {isEditing && editingSection && (
        <div className="fixed inset-0 bg-neutral-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-neutral-200 flex justify-between items-center">
              <h3 className="text-lg font-serif font-semibold">Edit Section: {editingSection.name}</h3>
              <button 
                onClick={() => setIsEditing(false)}
                className="text-neutral-500 hover:text-neutral-700"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="px-6 py-4">
              <div className="space-y-4">
                <div className="form-group">
                  <label htmlFor="section-name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Section Name
                  </label>
                  <input
                    type="text"
                    id="section-name"
                    value={editingSection.name}
                    onChange={(e) => setEditingSection({ ...editingSection, name: e.target.value })}
                    className="w-full"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="section-type" className="block text-sm font-medium text-neutral-700 mb-1">
                    Section Type
                  </label>
                  <select
                    id="section-type"
                    value={editingSection.type}
                    onChange={(e) => setEditingSection({ ...editingSection, type: e.target.value as any })}
                    className="w-full"
                    disabled
                  >
                    <option value="banner">Banner</option>
                    <option value="featured">Featured Products</option>
                    <option value="category">Category</option>
                    <option value="testimonial">Testimonial</option>
                    <option value="about">About</option>
                    <option value="newsletter">Newsletter</option>
                  </select>
                  <p className="text-xs text-neutral-500 mt-1">Section type cannot be changed.</p>
                </div>
                
                <div className="form-group">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={editingSection.active}
                      onChange={() => setEditingSection({ ...editingSection, active: !editingSection.active })}
                    />
                    <div className="w-11 h-6 bg-neutral-200 rounded-full peer peer-checked:bg-success-500 peer-focus:ring-4 peer-focus:ring-success-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    <span className="ml-3 text-sm font-medium text-neutral-700">Active</span>
                  </label>
                </div>
                
                <div className="border-t border-neutral-200 pt-4 mt-4">
                  <h4 className="text-md font-medium mb-3">Section Settings</h4>
                  
                  {editingSection.type === 'banner' && (
                    <div className="space-y-4">
                      <div className="form-group">
                        <label htmlFor="banner-title" className="block text-sm font-medium text-neutral-700 mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          id="banner-title"
                          value={editingSection.settings.title}
                          onChange={(e) => handleSettingChange('title', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="banner-subtitle" className="block text-sm font-medium text-neutral-700 mb-1">
                          Subtitle
                        </label>
                        <input
                          type="text"
                          id="banner-subtitle"
                          value={editingSection.settings.subtitle}
                          onChange={(e) => handleSettingChange('subtitle', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="banner-btn-text" className="block text-sm font-medium text-neutral-700 mb-1">
                          Button Text
                        </label>
                        <input
                          type="text"
                          id="banner-btn-text"
                          value={editingSection.settings.buttonText}
                          onChange={(e) => handleSettingChange('buttonText', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="banner-btn-link" className="block text-sm font-medium text-neutral-700 mb-1">
                          Button Link
                        </label>
                        <input
                          type="text"
                          id="banner-btn-link"
                          value={editingSection.settings.buttonLink}
                          onChange={(e) => handleSettingChange('buttonLink', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="banner-bg-image" className="block text-sm font-medium text-neutral-700 mb-1">
                          Background Image URL
                        </label>
                        <input
                          type="text"
                          id="banner-bg-image"
                          value={editingSection.settings.backgroundImage}
                          onChange={(e) => handleSettingChange('backgroundImage', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="banner-text-color" className="block text-sm font-medium text-neutral-700 mb-1">
                          Text Color
                        </label>
                        <select
                          id="banner-text-color"
                          value={editingSection.settings.textColor}
                          onChange={(e) => handleSettingChange('textColor', e.target.value)}
                          className="w-full"
                        >
                          <option value="light">Light</option>
                          <option value="dark">Dark</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  {editingSection.type === 'featured' && (
                    <div className="space-y-4">
                      <div className="form-group">
                        <label htmlFor="featured-title" className="block text-sm font-medium text-neutral-700 mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          id="featured-title"
                          value={editingSection.settings.title}
                          onChange={(e) => handleSettingChange('title', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="featured-count" className="block text-sm font-medium text-neutral-700 mb-1">
                          Number of Products to Show
                        </label>
                        <input
                          type="number"
                          id="featured-count"
                          min="1"
                          max="12"
                          value={editingSection.settings.itemCount}
                          onChange={(e) => handleSettingChange('itemCount', parseInt(e.target.value))}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={editingSection.settings.showPrices}
                            onChange={() => handleSettingChange('showPrices', !editingSection.settings.showPrices)}
                          />
                          <div className="w-11 h-6 bg-neutral-200 rounded-full peer peer-checked:bg-primary-500 peer-focus:ring-4 peer-focus:ring-primary-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                          <span className="ml-3 text-sm font-medium text-neutral-700">Show Prices</span>
                        </label>
                      </div>
                      
                      <div className="form-group">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={editingSection.settings.showRatings}
                            onChange={() => handleSettingChange('showRatings', !editingSection.settings.showRatings)}
                          />
                          <div className="w-11 h-6 bg-neutral-200 rounded-full peer peer-checked:bg-primary-500 peer-focus:ring-4 peer-focus:ring-primary-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                          <span className="ml-3 text-sm font-medium text-neutral-700">Show Ratings</span>
                        </label>
                      </div>
                    </div>
                  )}
                  
                  {/* Other section type settings would go here */}
                  {['category', 'testimonial', 'about', 'newsletter'].includes(editingSection.type) && (
                    <div className="flex items-center justify-center p-4">
                      <div className="text-center">
                        <h5 className="font-medium text-neutral-700">Settings Editor</h5>
                        <p className="text-sm text-neutral-500 mb-4">
                          Edit settings for this section type
                        </p>
                        <Button variant="secondary">
                          <ExternalLink size={16} className="mr-1" />
                          Open Editor
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 border-t border-neutral-200 flex justify-end space-x-2">
              <Button 
                variant="ghost" 
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="primary"
                onClick={handleSaveSection}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutManager;