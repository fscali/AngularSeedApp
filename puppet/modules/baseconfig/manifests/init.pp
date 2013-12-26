# == Class: baseconfig
#
# Performs initial configuration tasks for all Vagrant boxes.
#
class baseconfig {

	file {
    '/home/vagrant/.bashrc':
      owner => 'vagrant',
      group => 'vagrant',
      mode  => '0644',
      source => 'puppet:///modules/baseconfig/bashrc';
  }
  
  if $custom_os == "windows" {
   file {
      '/etc/wgetrc':
        owner => 'root',
        group => 'root',
        mode  => '0644',
        source => 'puppet:///modules/baseconfig/wgetrc';
    }

    file {
    '/etc/apt/apt.conf':
      owner => 'root',
      group => 'root',
      mode  => '0644',
      source => 'puppet:///modules/baseconfig/apt.conf';
    }

  }
	
	
  
  exec { 'apt-get update':
    command => '/usr/bin/apt-get update';
  }
  
  if $custom_os == "windows" {
	  
	  package { "dos2unix":
		  ensure => present,
		  require => Exec["apt-get update"];				
	   }

		exec { "dos2unix_bashrc":
			command => "/usr/bin/dos2unix .bashrc",
			cwd     => "/home/vagrant/",
			require => [ Package["dos2unix"] ]
		}

  }

  host { 'hostmachine':
    ip => '192.168.0.1';
  }

  file { '/home/vagrant/dev':
    ensure => 'link',
    target => '/vagrant'
  }
  
  
 
}