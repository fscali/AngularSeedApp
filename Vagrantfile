is_windows = (RbConfig::CONFIG['host_os'] =~ /mswin|mingw|cygwin/)
if  is_windows
	box			= 'precise32'
	url			= 'http://files.vagrantup.com/precise32.box'
	ram 		= '512'
else
	box 		= 'precise64'
	url			= 'http://files.vagrantup.com/precise64.box'
	ram 		= '1024'
end
hostname	= 'myprecisebox'
domain		= 'local'
ip			= '192.168.0.42'


Vagrant::Config.run do |config|
	config.vm.box = box
	config.vm.box_url = url
	#config.vm.hostname = hostname + '.' + domain
	config.vm.network :hostonly, ip
	
	config.vm.customize [
		'modifyvm', :id,
		'--name', hostname,
		'--memory', ram	
	]
	
	config.vm.provision :puppet do |puppet|
		if is_windows
			puppet.facter = {
				"custom_os" => "windows"
			}
		else
			puppet.facter = {
				"custom_os" => "mac"
			}
		end
		puppet.manifests_path = 'puppet/manifests'
		puppet.manifest_file  = 'site.pp'
		puppet.module_path    = 'puppet/modules'	
		#puppet.options = "--verbose --debug"
	end
	
	
end